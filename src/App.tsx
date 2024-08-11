import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectList from './components/ProjectList/ProjectList';
import ProjectDetails from './components/ProjectDetail/ProjectDetails';
import CreateProjectForm from './components/CreateProjectForm/CreateProjectForm';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import CreateTaskForm from './components/CreateTaskForm/CreateTaskForm';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CreateProjectForm />} />
        <Route path="/project-list" element={<ProjectList />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
        <Route path="/projects/:projectId/create-task" element={<CreateTaskForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-project" element={<CreateProjectForm />} />
      </Routes>
    </Router>
  );
};

export default App;
