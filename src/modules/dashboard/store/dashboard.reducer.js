const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  tasks: [
    {
      id: "0",
      title: "First Task",
      summary: "This is First Task",
      status: "ToDo",
    },
    {
      id: "1",
      title: "Second Task",
      summary: "This is Second Task",
      status: "InProgress",
    },
    {
      id: "2",
      title: "Third Task",
      summary: "This is Third Task",
      status: "Review",
    },
    {
      id: "3",
      title: "Fourth Task",
      summary: "This is Fourth Task",
      status: "Completed",
    },
  ],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const updatedTask = [...state.tasks, action.payload];
      state.tasks = updatedTask;
    },
    changeStatus: (state, action) => {
      const { id, status } = action.payload;
      const updatedTask = state.tasks.map((task) =>
        task.id === id ? { ...task, status } : task
      );
      state.tasks = updatedTask;
    },
  },
});

export const { addTask, changeStatus } = dashboardSlice.actions;
export const dashboardReducer = dashboardSlice.reducer;
