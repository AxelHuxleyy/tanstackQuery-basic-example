import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface CounterState {
  isOpen: boolean;
  id?: string;
}

// Define the initial state using that type
const initialState: CounterState = {
  isOpen: false,
};

export const viewModalSlice = createSlice({
  name: 'viewModal',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    openViewModal: (state, action: PayloadAction<string>) => {
      state.isOpen = true;
      state.id = action?.payload;
    },
    closeViewModal: (state) => {
      state.isOpen = false;
      state.id = undefined;
    },
  },
});

export const { openViewModal, closeViewModal } = viewModalSlice.actions;

export default viewModalSlice.reducer;
