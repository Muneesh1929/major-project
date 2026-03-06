# 🌍 Wanderlust

A full-stack web application inspired by Airbnb where users can explore travel listings, create their own listings, and share reviews. The application demonstrates backend development using Node.js, Express, MongoDB, and MVC architecture.

---

🚀 Live Demo
🌐 Live Website:
https://wanderlust-project-k9jr.onrender.com

---

##📌 Features

• View all travel listings
• Add new property listings
• Edit or delete listings
• User authentication (Signup / Login)
• Add reviews and ratings
• Flash messages for user feedback
• Map integration using Mapbox
• Image upload using Cloudinary
• Responsive UI using EJS templates

---

## 🛠️ Tech Stack

### Backend
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  

### Authentication
- Passport.js  
- Passport Local Strategy  
- Express Session  

### Frontend
- EJS  
- Bootstrap  
- CSS  

### Other Tools
- Mapbox (Location & Maps)  
- Cloudinary (Image Storage)  
- MongoDB Atlas (Database)  
- Render (Deployment)  
- Git & GitHub (Version Control)  

---

## 📁 Project Structure

wanderlust
│
├── controllers
│ ├── listings.js
│ ├── reviews.js
│ └── users.js
│
├── models
│ ├── listing.js
│ ├── review.js
│ └── user.js
│
├── routes
│ ├── listing.js
│ ├── review.js
│ └── user.js
│
├── views
│ ├── listings
│ ├── users
│ └── layouts
│
├── public
│ ├── css
│ └── js
│
├── utils
│ └── ExpressError.js
│
├── app.js
└── package.json


---
## ⚙️ Installation & Setup

Follow these steps to run the project locally.
```bash
# 1️⃣ Clone the repository
git clone https://github.com/YOUR_USERNAME/wanderlust.git

# 2️⃣ Navigate to the project directory
cd wanderlust

# 3️⃣ Install dependencies
npm install

# 4️⃣ Create a .env file and add the following
ATLASDB_URL=your_mongodb_atlas_connection_string
MAP_TOKEN=your_mapbox_token
SECRET=your_session_secret
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

# 5️⃣ Run the application
node app.js

# 6️⃣ Open in browser
http://localhost:8080
```

## 📸 Screenshots

- Homepage  
- Create new listing  
- Reviews and Map 
- Listing Info
- SignUp
- Login

Example:

![Homepage](Screenshots/Screenshot 2026-03-06 at 10.34.18 AM.png)

![Create new listing](Screenshots/Screenshot 2026-03-06 at 10.38.11 AM.png)

![Reviews and Map](Screenshots/Screenshot 2026-03-06 at 10.38.36 AM.png)

![Listing Info](Screenshots/Screenshot 2026-03-06 at 10.38.29 AM.png)

![SignUp](Screenshots/Screenshot 2026-03-06 at 10.37.44 AM.png)

![Login](Screenshots/Screenshot 2026-03-06 at 10.37.37 AM.png)

## 🎯 Learning Outcomes

Through this project I learned:

- Full Stack Web Development  
- MVC Architecture  
- RESTful Routing  
- Authentication and Authorization using Passport.js  
- Database Schema Design with MongoDB  
- Cloud Deployment using Render  
- Version Control using Git and GitHub  



## 👨‍💻 Author

**Muneesh Sharma**

M.Tech Data Science – Lovely Professional University  

GitHub:  
https://github.com/Muneesh1929  



## ⭐ If You Like This Project

If you found this project helpful, please give it a **star ⭐ on GitHub**.
