import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store'; 
import styles from './ProjectList.module.css';

const ProjectList: React.FC = () => {
  const projects = useSelector((state: RootState) => state.projects.projects);

  return (
    <section className={styles.main}>
      <h1>Project List</h1>
      <ul>
        {projects.map(project => (
          <Link to={`/projects/${project.id}`}>
            <li key={project.id}>
              <h4>Title: {project.name}</h4>
              <p>{project.description}</p>
            </li>
            </Link>
        ))}
      </ul>
    </section>
  );
};

export default ProjectList;
