import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {BooksType} from '../../mainTypes';
import {AppThunk, RootState} from '../store';
import {userAPI} from "../../API/MyBookApi";

export type myBookState = {
  books: BooksType | null
  category: string
  sorting: string
}

const initialState: myBookState = {
  books: null,
  category: '*',
  sorting: 'relevance'
};

export const myBookSlice = createSlice({
  name: 'myBook',
  initialState,
  reducers: {
    addBooks: (state, action: PayloadAction<BooksType>) => {
      state.books = action.payload;
    },
    setCategory: (state, action:PayloadAction<string>) => {
      state.category = action.payload
    },
    setSorting: (state, action:PayloadAction<string>) => {
      state.sorting = action.payload
    }
  },
});

export const {addBooks,setCategory,setSorting} = myBookSlice.actions

export const selectBooks = (state: RootState) => state.myBook.books
export const selectCategories = (state: RootState) => state.myBook.category
export const selectSorting = (state: RootState) => state.myBook.sorting
/**
 * Get books from googleBooks
 * @param category - book category
 * @param sorting - sorting parameter
 */
export const getBooksFromGoogle = (category: string, sorting: string, searchValue: string): AppThunk =>
    async (dispatch) => {
      const currentBooks = await userAPI.getBooks(category, sorting, searchValue)
      dispatch (addBooks(currentBooks))
    }

export default myBookSlice.reducer;
