import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  firstName: 'Aytach',
  lastName: 'Chakif',
  userId: 1,
};

export const User = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    updatingFirstName: (state, action) => {
      state.firstName = action.payload.firstName;
    },
  },
});

export const {updatingFirstName} = User.actions;
export default User.reducer;
