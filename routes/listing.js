const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js");
const Listing = require("../models/listing.js")
const { isLoggedIn } = require("../middleware.js");

const validateListing = (req, res, next) => {
    let {error} = listingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
};

//INDEX ROUTE
router.get("/", wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("./listings/index.ejs", { allListings });
}));

//NEW ROUTE
router.get("/new", isLoggedIn , (req, res) => {   
    res.render("listings/new.ejs");
});

//SHOW ROUTE
router.get("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews").populate("owner");
    if(!listing) {
        req.flash("error" , "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs", { listing });
}));

//CREATE ROUTE
router.post("/", isLoggedIn ,validateListing,
    wrapAsync(async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success","New Listing Created");
    res.redirect("/listings");
}));

//EDIT ROUTE
router.get("/:id/edit", isLoggedIn ,wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if(!listing) {
        req.flash("error" , "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing });
}));

//UPDATE ROUTE
router.put("/:id",isLoggedIn ,validateListing, 
    wrapAsync (async (req, res) => {
    let { id } = req.params;
    let data = req.body.listing;
    data.image = {
        filename: "listingimage",
        url: data.image
    };
    let listing = await Listing.findById(id);
    if(!listing.owner.equals(res.locals.currUser._id)) {
        req.flash("error" , "You don't have permission to edit");
        return res.redirect(`/listings/${id}`);
    }

    await Listing.findByIdAndUpdate(id, data);
    req.flash("success" , "Listing Updated");
    res.redirect(`/listings/${id}`);
}));


//DELETE ROUTE
router.delete("/:id",isLoggedIn ,wrapAsync( async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success" , "Listing Deleted");
    res.redirect("/listings");
}));


module.exports = router;