import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface editModalState {
  isOpen: boolean;
  id?: string;
}

// Define the initial state using that type
const initialState: editModalState = {
  isOpen: false,
};

export const editModalSlice = createSlice({
  name: 'editModal',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    openEditModal: (state, action: PayloadAction<string>) => {
      state.isOpen = true;
      state.id = action?.payload;
    },
    closeEditModal: (state) => {
      state.isOpen = false;
      state.id = undefined;
    },
  },
});

export const { openEditModal, closeEditModal } = editModalSlice.actions;

export default editModalSlice.reducer;
