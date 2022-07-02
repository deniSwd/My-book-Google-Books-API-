import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import myBookReducer from './slices/myBookSlice';

export const store = configureStore({
  reducer: {
    myBook: myBookReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
