Project Management App
Overview
This is a simple project management app built with React, TypeScript, and Redux. It lets you manage projects and tasks easily.

Features
Create Projects: Add new projects with a name and description.
View Projects: See a list of all your projects.
Create Tasks: Add tasks to each project with details like name, description, due date, and status.
View Tasks: See tasks within each project.
Update Tasks: Change the status of tasks (To Do, In Progress, Done).
Delete: Remove projects and tasks when needed.
Login: Simple login with form validation.





Prerequisites
Node.js
npm or yarn




Installation

cd project-management-app
Install dependencies:

npm install
npm run dev 




yarn install
Running the App
Start the mock API server:
npx json-server --watch db.json --port 5000
Start the React app:

npm start


you can use 
username: admin 
password: admin 
for login page to log and redirect to project list