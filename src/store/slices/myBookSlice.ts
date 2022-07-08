import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {BooksType} from '../../mainTypes';
import {AppThunk, RootState} from '../store';
import {userAPI} from "../../API/MyBookApi";

export type myBookState = {
  books: BooksType | null
  category: string
  sorting: string
  searchValue: string
  pageIndex: number
  errorMessage: string
}

const initialState: myBookState = {
  books: null,
  category: '*',
  sorting: 'relevance',
  searchValue: '',
  pageIndex: 0,
  errorMessage: '',
};

export const myBookSlice = createSlice({
  name: 'myBook',
  initialState,
  reducers: {
    addBooks: (state, action: PayloadAction<BooksType>) => {
      if (state.pageIndex === 0) {
        state.books = action.payload
      } else if (state.books !== null) {
        state.books.items = [...state.books.items, ...action.payload.items]
      }
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload
    },
    setSorting: (state, action: PayloadAction<string>) => {
      state.sorting = action.payload
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload
      state.pageIndex = 0
    },
    setPageIndex: (state) => {
      state.pageIndex += 1
    },
    setError: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload
    }
  },
});

export const {addBooks, setCategory, setSorting, setSearchValue, setPageIndex, setError} = myBookSlice.actions

export const selectBooks = (state: RootState) => state.myBook.books
export const selectError = (state: RootState) => state.myBook.errorMessage

//Get books from googleBooks
export const getBooksFromGoogle = (): AppThunk =>
  async (dispatch, getState) => {
    const category: string = getState().myBook.category
    const sorting: string = getState().myBook.sorting
    const searchValue: string = getState().myBook.searchValue
    const pageIndex: number = getState().myBook.pageIndex
    try {
      const currentBooks = await userAPI.getBooks(category, sorting, searchValue, pageIndex)
      dispatch(addBooks(currentBooks))
    } catch (error: any) {
      dispatch(setError(error.message))
    }
  }

export default myBookSlice.reducer;
