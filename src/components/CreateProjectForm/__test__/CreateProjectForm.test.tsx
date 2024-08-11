import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import projectReducer from '../../../store'; 
import CreateProjectForm from '../CreateProjectForm';


const store = configureStore({
  reducer: {
    projects: projectReducer,
  },
});

describe('CreateProjectForm', () => {
  test('renders the form', () => {
    render(
      <Provider store={store}>
        <CreateProjectForm />
      </Provider>
    );

    expect(screen.getByLabelText(/Project Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Project Description/i)).toBeInTheDocument();
    expect(screen.getByText(/Create Project/i)).toBeInTheDocument();
  });

  test('allows users to type in the form fields', () => {
    render(
      <Provider store={store}>
        <CreateProjectForm />
      </Provider>
    );

    fireEvent.change(screen.getByLabelText(/Project Name/i), { target: { value: 'New Project' } });
    fireEvent.change(screen.getByLabelText(/Project Description/i), { target: { value: 'Project Description' } });

    expect(screen.getByLabelText(/Project Name/i)).toHaveValue('New Project');
    expect(screen.getByLabelText(/Project Description/i)).toHaveValue('Project Description');
  });

  test('submits the form and calls the Redux action', async () => {
    const mockDispatch = jest.fn();
    jest.spyOn(store, 'dispatch').mockImplementation(mockDispatch);

    render(
      <Provider store={store}>
        <CreateProjectForm />
      </Provider>
    );

    fireEvent.change(screen.getByLabelText(/Project Name/i), { target: { value: 'New Project' } });
    fireEvent.change(screen.getByLabelText(/Project Description/i), { target: { value: 'Project Description' } });

    fireEvent.click(screen.getByText(/Create Project/i));

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(expect.objectContaining({
        type: 'projects/addProject',
        payload: {
          name: 'New Project',
          description: 'Project Description',
        },
      }));
    });
  });
});
