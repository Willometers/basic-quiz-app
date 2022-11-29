import { createSlice } from '@reduxjs/toolkit';

export const questionsSlice = createSlice({
    name: 'questions',
    initialState: [],
    reducers: {
      addQuestions: (state, action) => {
        const todo = {
          id: uuid(),
          text: action.payload,
        };
  
        state.push(todo);
    }
    },
  });
  
  // this is for dispatch
  export const { addTodo } = questionsSlice.actions;
  
  // this is for configureStore
  export default questionsSlice.reducer;