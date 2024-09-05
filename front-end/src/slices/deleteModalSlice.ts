import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface deleteModalState {
  isOpen: boolean;
  id?: string;
}

const initialState: deleteModalState = {
  isOpen: false,
};

export const deleteModalState = createSlice({
  name: 'deleteModal',
  initialState,
  reducers: {
    openDeleteModal: (state, action: PayloadAction<string>) => {
      state.isOpen = true;
      state.id = action?.payload;
    },
    closeDeleteModal: (state) => {
      state.isOpen = false;
      state.id = undefined;
    },
  },
});

export const { openDeleteModal, closeDeleteModal } = deleteModalState.actions;

export default deleteModalState.reducer;
