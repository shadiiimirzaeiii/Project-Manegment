import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  id: number;
  projectId: number;
  name: string;
  description: string;
  dueDate: string;
  status: string;
}

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: []
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<Task>) {
      state.tasks.push(action.payload);
    },
    updateTask(state, action: PayloadAction<Task>) {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    removeTask(state, action: PayloadAction<number>) {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    }
  }
});

export const { addTask, updateTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
