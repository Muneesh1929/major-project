module.exports.isLoggedIn = (req , res , next) => {
    // console.log(req.user);
    // console.log(req.path , "" , req.originalUrl);
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error" , "You must be loged in to create lisitng!");
        return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req , res , next) => {
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};