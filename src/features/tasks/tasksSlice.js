import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleTaskCompletion: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, editTask, deleteTask, toggleTaskCompletion } = tasksSlice.actions;

export const selectAllTasks = (state) => state.tasks.tasks;
export const selectCompletedTasks = (state) => state.tasks.tasks.filter((task) => task.completed);
export const selectPendingTasks = (state) => state.tasks.tasks.filter((task) => !task.completed);
export const selectOverdueTasks = (state) =>
  state.tasks.tasks.filter((task) => new Date(task.dueDate) < new Date() && !task.completed);

export default tasksSlice.reducer;
