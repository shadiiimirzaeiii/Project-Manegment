import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addTask } from '../../store/tasksSlice'; 
import { useParams, useNavigate } from 'react-router-dom';
import styles from './CreateTaskForm.module.css';

interface TaskValues {
  name: string;
  description: string;
  dueDate: string;
  status: string;
}

const TaskSchema = Yup.object().shape({
  name: Yup.string().required('Name is Required'),
  description: Yup.string().required('Description is Required'),
  dueDate: Yup.date().required('Due Date is Required'),
  status: Yup.string().oneOf(['To Do', 'In Progress', 'Done'], 'Invalid status').required('Status is Required'),
});

const CreateTaskForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { projectId } = useParams<{ projectId: string }>();

  return (
    <div className={styles.container}>
      <h2>Create Task</h2>
      <Formik
        initialValues={{ name: '', description: '', dueDate: '', status: 'To Do' }}
        validationSchema={TaskSchema}
        onSubmit={(values: TaskValues) => {
          if (projectId) {
            dispatch(addTask({ id: Date.now(), projectId: parseInt(projectId), ...values }));
            navigate(`/projects/${projectId}`);
          }
        }}
      >
        {() => (
          <Form className={styles.form} autoComplete='off'>
            <div>
              <label htmlFor="name">Name</label>
              <Field name="name" className={styles.input} />
              <ErrorMessage name="name" component="div" className={styles.error} />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <Field as="textarea" name="description" className={styles.textarea} />
              <ErrorMessage name="description" component="div" className={styles.error} />
            </div>
            <div>
              <label htmlFor="dueDate">Due Date</label>
              <Field type="date" name="dueDate" className={styles.input} />
              <ErrorMessage name="dueDate" component="div" className={styles.error} />
            </div>
            <div>
              <label htmlFor="status">Status</label>
              <Field as="select" name="status" className={styles.input}>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
              </Field>
              <ErrorMessage name="status" component="div" className={styles.error} />
            </div>
            <button type="submit" className={styles.button}>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateTaskForm;
