# Major Project – Airbnb Clone 🏡

This is a **full-stack Airbnb clone–style web application** built using **Node.js and Express**.  
The project focuses on backend development concepts like routing, database modeling, validation, and error handling.

This project is built as a **portfolio project for placements**.

---

## 🚀 Features

- View all listings
- Add new listings
- Edit existing listings
- Delete listings
- Server-side validation
- Centralized error handling
- Clean MVC-style project structure

(Authentication will be added later)

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Local)
- **Templating Engine:** EJS
- **Validation:** Joi
- **Styling:** CSS
- **Version Control:** Git & GitHub

---

## 📁 Project Structure

MajorProject/
├── init/ # Database initialization files
├── models/ # Mongoose models
├── public/ # Static files (CSS, JS)
├── utils/ # Custom error handling & async wrapper
├── views/ # EJS templates
│ ├── includes/
│ ├── layouts/
│ └── listings/
├── schema.js # Joi validation schemas
├── app.js # Main application file
├── package.json
├── .gitignore
└── README.md


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone git@github.com:Muneesh1929/major-project.git

### Go to project folder
cd major-project
npm install
mongosh
nodemon app.js


