# Quiz App

## Project Description
The **Quiz App** is a full-stack application designed to present student quizzes and announcements data for the current semester. It allows students to interact with quizzes and view important announcements. This app is built with React and Redux for the frontend, and Express.js (or Nest.js) with MongoDB for the backend.

## Technologies Used
### Frontend:
- **React** (TypeScript)
- **Redux** (for state management)
- **Vite** (build tool)
- **Material UI** (for UI components)
- **Axios** (for making API requests)
- **Jest** (for unit testing)
- **React Router** (for routing)
- **i18next** (for internationalization)

### Backend:
- **Node.js**
- **Express.js** (or Nest.js)
- **MongoDB** (for data storage)
- **Mongoose** (ODM for MongoDB)
- **Jest** (for testing)

## Installation

### Backend:
1. Clone the repository:
   
   git clonehttps://github.com/Abdelrahmanghoniem/quizzes-website/tree/main/Backend

2. Navigate to the backend directory:
cd quiz-app-backend

3. Install dependencies:
npm install


4. To run the backend in development mode, use:
npm run dev

### Frontend:
Clone the repository:

git clone https://github.com/Abdelrahmanghoniem/quizzes-website/tree/main/Frontend

2. Navigate to the frontend directory:
cd quiz-app-frontend

3. Install dependencies:
npm install

4. To run the frontend in development mode, use:
npm run dev


### Database Setup:
You will need a MongoDB instance running locally or use MongoDB Atlas for a cloud-based database.
Ensure to add the database connection URI to your .env file:

MONGO_URI=your_mongodb_connection_uri


### Usage
1. Frontend: The frontend provides a responsive UI that displays available quizzes and announcements. Students can interact with quizzes, view results, and check for any upcoming announcements.

2. Backend: The backend handles data storage and API requests, providing endpoints to fetch quizzes, submit answers, and retrieve announcements.


### Features
View quizzes for the current semester.
Take quizzes and submit answers.
View important announcements.
User authentication and session management (optional, if added).
Backend API to handle CRUD operations for quizzes and announcements.
Internationalization (i18n) support for different languages.


### Running Tests
To run tests for the frontend, navigate to the frontend directory and run:
npm run test

### Contributing
Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -m 'Add feature').
Push the branch (git push origin feature-branch).
Create a new Pull Request.

### License
This project is licensed under the MIT License.

### Author
[Abdelrahman Ghoniem](https://www.linkedin.com/in/abdelrahman-ghoniem-827710263/)
 