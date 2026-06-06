Task Management Web Application

>>> Project Overview

This is a full-stack Task Management Web Application built using the MERN stack (MongoDB, Express, React, Node.js).

It allows users to:

Register and login securely using JWT authentication
Create, update, delete, and manage tasks
Mark tasks as completed or pending
Filter and search tasks
Access only their own tasks (user-based data isolation)
Use a responsive UI across mobile, tablet, and desktop

>>> Tech Stack

Frontend

React.js (Functional Components + Hooks)
React Router DOM
Axios
Tailwind CSS
React Toastify

Backend

Node.js
Express.js
MongoDB + Mongoose
JWT Authentication
bcryptjs (password hashing)
dotenv

>>> Folder Structure

Backend

server/
│── config/
│   └── db.js
│── controllers/
│   ├── authController.js
│   └── taskController.js
│── middleware/
│   └── authMiddleware.js
│── models/
│   ├── User.js
│   └── Task.js
│── routes/
│   ├── authRoutes.js
│   └── taskRoutes.js
│── server.js
│── .env
Frontend
client/
│── src/
│   ├── api/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── routes/
│   └── App.js

>>> Authentication Flow
User registers or logs in
Backend validates credentials
JWT token is generated
Token is stored in localStorage
Token is sent with every API request
Backend middleware verifies token before accessing protected routes

>>> API Endpoints

Auth Routes

Method	Endpoint	Auth	Description
POST	/auth/register	No	Register new user
POST	/auth/login	No	Login user

Register Request Body

{
  "name": "John",
  "email": "john@example.com",
  "password": "123456"
}

Login Request Body

{
  "email": "john@example.com",
  "password": "123456"
}

>>> Task Routes (Protected)

All routes require JWT token in header:

Authorization: Bearer <token>

Method	Endpoint	Description
GET	    /tasks	    Get user tasks
POST	/tasks	    Create task
PUT	    /tasks/:id	Update task
PATCH	/tasks/:id	Toggle status
DELETE	/tasks/:id	Delete task

>>> Task Schema

{
  title: String,
  description: String,
  status: "Pending" | "Completed",
  userId: ObjectId,
  createdAt: Date
}

>>> Setup Instructions

Backend Setup

cd server
npm install
npm run dev

Create .env file:

MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
PORT=5000

Frontend Setup

cd client
npm install
npm start

>>> Assumptions
Each user can only access their own tasks
JWT is stored in localStorage
Token is required for all task APIs
Email is unique per user
MongoDB is used as primary database

>>> Features Implemented
JWT Authentication
Protected Routes
Task CRUD operations
Search + Filter
Pagination
Responsive UI (mobile/tablet/desktop)
Toast notifications
Reusable components

>>> Optional Enhancements (Bonus)
Dark mode support
Docker setup
Swagger API documentation
Role-based access control
Deployment (Vercel + Render)
