import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  members: [],
  selectedAvatar: null,
};

const memberSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {
    addMember: (state, action) => {
      state.members.push(action.payload);
    },
    setAvatar: (state, action) => {
      state.selectedAvatar = action.payload;
    },
  },
});

export const { addMember, setAvatar } = memberSlice.actions;
export default memberSlice.reducer;
