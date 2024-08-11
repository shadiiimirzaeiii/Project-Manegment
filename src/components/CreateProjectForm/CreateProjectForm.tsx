import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addProject } from '../../store/projectsSlice'; 
import { useNavigate } from 'react-router-dom';
import styles from './CreateProjectForm.module.css';

interface ProjectValues {
  name: string;
  description: string;
}

const ProjectSchema = Yup.object().shape({
  name: Yup.string().required('Project Name is Required'),
  description: Yup.string().required('Project Description is Required'),
});

const CreateProjectForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h2>Create Project</h2>
      <Formik
        initialValues={{ name: '', description: '' }}
        validationSchema={ProjectSchema}
        onSubmit={(values: ProjectValues) => {
          dispatch(addProject({ id: Date.now(), ...values }));
          navigate('/project-list');
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
            <button type="submit" className={styles.button}>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateProjectForm;
