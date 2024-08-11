import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTask, removeTask } from '../../store/tasksSlice'; 
import { Task as TaskType } from '../../store/tasksSlice';
import styles from './Task.module.css';

interface TaskProps {
  task: TaskType;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const dispatch = useDispatch();

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(updateTask({ ...task, status: e.target.value }));
  };

  const handleDelete = () => {
    dispatch(removeTask(task.id));
  };

  return (
    
    <div className={styles.task}>
      <h4>{task.name}</h4>
      <p>{task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <select value={task.status} onChange={handleStatusChange}>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <br/>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Task;
