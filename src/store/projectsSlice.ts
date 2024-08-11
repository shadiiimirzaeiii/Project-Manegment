import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Project {
  id: number;
  name: string;
  description: string;
}

interface ProjectsState {
  projects: Project[];
}

const initialState: ProjectsState = {
  projects: []
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject(state, action: PayloadAction<Project>) {
      state.projects.push(action.payload);
    },
    removeProject(state, action: PayloadAction<number>) {
      state.projects = state.projects.filter(project => project.id !== action.payload);
    }
  }
});

export const { addProject, removeProject } = projectsSlice.actions;
export default projectsSlice.reducer;
