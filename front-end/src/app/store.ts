import { configureStore } from '@reduxjs/toolkit';
import viewModalSlice from '../slices/viewModalSlice';
import editModalSlice from '../slices/editModalSlice';
import deleteModalSlice from '../slices/deleteModalSlice';

export const store = configureStore({
  reducer: {
    viewModal: viewModalSlice,
    editModal: editModalSlice,
    deleteModal: deleteModalSlice,
  },
  // devTools: process.env.NODE_ENV !== "development" ? false : true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
