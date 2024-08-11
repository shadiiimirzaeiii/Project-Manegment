import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './Login.module.css';

const Login: React.FC = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const initialValues = {
    username: '',
    password: ''
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
  });

  const onSubmit = (values: { username: string; password: string }) => {
    if (values.username === 'admin' && values.password === 'admin') {
      // Simulate API call
      setTimeout(() => {
       
        navigate('/project-list');
      }, 500);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      {error && <div className={styles.error}>{error}</div>}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="username">Username</label>
              <Field type="text" id="username" name="username" />
              <ErrorMessage name="username" component="div" className={styles.error} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" className={styles.error} />
            </div>
            <button type="submit" className={styles.submitButton}>Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
