import { createSlice } from '@reduxjs/toolkit';

const initialValue = {
  courseId:'',
  courseName:'',
  student:[],
};

export const Slice = createSlice({
  name: 'data',
  initialState: initialValue,
  reducers: {
    addStudent: (state, action) => {
      // console.log(action.payload)
      state.student = action.payload
      // console.log(state.student)
    },
  },
});

export const {addStudent } = Slice.actions;
export default Slice.reducer;