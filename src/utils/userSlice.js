// import { createSlice } from "@reduxjs/toolkit";

// const userSlice = createSlice({
//     name : "user",
//     initialState : null,
//     reducers :{
//         addUser: (state, action) => {
//             state.push(action.payload); // Add new user to the array
//           },
//           removeUser: (state, action) => {
//             return state.filter(user => user.id !== action.payload); // Remove user by ID
//           },
//     }
// });

// export const { addUser , removeUser} = userSlice.actions;

// export default userSlice.reducer;


// userSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null // Initialize user as null or an empty object if needed
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      // Ensure the state.user is not null before accessing it
      if (!state.user) {
        state.user = {}; // Initialize it as an empty object
      }
      state.user.uid = action.payload.uid;
      state.user.email = action.payload.email;
    },
    removeUser: (state) => {
      state.user = null; // Set user back to null on removal
    }
  }
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
