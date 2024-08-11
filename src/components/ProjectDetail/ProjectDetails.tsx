import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { addTask, removeTask, updateTask } from '../../store/tasksSlice';
import Task from '../Task/Task';
import styles from './ProjectDetails.module.css';

const ProjectDetails: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const dispatch = useDispatch();
  const project = useSelector((state: RootState) =>
    state.projects.projects.find(p => p.id === parseInt(projectId))
  );
  const tasks = useSelector((state: RootState) =>
    state.tasks.tasks.filter(task => task.projectId === parseInt(projectId))
  );

  const handleAddTask = (task: { name: string; description: string; dueDate: string; status: string }) => {
    dispatch(addTask({ ...task, projectId: parseInt(projectId) }));
  };

  const handleUpdateTask = (taskId: number, status: string) => {
    dispatch(updateTask({ id: taskId, status }));
  };

  const handleRemoveTask = (taskId: number) => {
    dispatch(removeTask(taskId));
  };

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section className={styles.project}>
      <Link to={`/projects/${projectId}/create-task`}>Create Task</Link>
      <h1>'{project.name}' Project tasks</h1>
      <p>{project.description}</p>
      <ul className={styles.lists}>
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            onUpdateStatus={handleUpdateTask}
            onRemoveTask={handleRemoveTask}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProjectDetails;
