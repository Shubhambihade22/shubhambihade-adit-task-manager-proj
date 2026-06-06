<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
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
>>>>>>> 20c5c1c1abf48907af9819a58e0facb3688e0dbf
