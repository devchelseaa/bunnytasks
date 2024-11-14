Bunny Tasks
Introduction
This application is a full-stack Todo List that includes a frontend built with React and a backend built with Node.js and Express. The backend is connected to a MongoDB database. In this guide, we'll walk through the steps to run both the frontend and backend locally using Visual Studio Code (VS Code) and MongoDB.


Prerequisites
Before you begin, ensure you have the following installed on your local machine:

Visual Studio Code: Download Visual Studio Code
Node.js: Download and install Node.js
This will also install npm (Node Package Manager).
MongoDB (local installation or use MongoDB Atlas for cloud):
Install MongoDB locally or create a MongoDB cluster in MongoDB Atlas.

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

Install frontend dependencies
Run the following command to install the frontend dependencies
npm install

Install Backend Dependencies
Step 1: Navigate to the backend folder (if separate)
In your project folder, you should have a directory for the backend (e.g., backend). If you have separate directories for backend and frontend, navigate into the backend directory:

cd backend

Install Node.js dependencies
Run the following command to install the backend dependencies:

npm install

Start the Frontend and Backend Server
In each directory (frontend and backend) via the terminal run
npm start

Accessing the Application
Frontend: Open your browser and go to http://localhost:3000. This will show the React Todo List app.
Backend: Your backend will be running at http://localhost:5000 (or another port if specified in your server.js).
The frontend should be able to interact with the backend API and MongoDB, allowing you to add tasks, mark tasks as completed, and delete tasks.