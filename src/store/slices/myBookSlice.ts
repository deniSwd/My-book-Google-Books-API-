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
  isLoading: boolean
}

const initialState: myBookState = {
  books: null,
  category: '*',
  sorting: 'relevance',
  searchValue: '',
  pageIndex: 0,
  errorMessage: '',
  isLoading: false,
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
    },
    setPreloader: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
  },
});

export const {
  addBooks, setCategory,
  setSorting, setSearchValue,
  setPageIndex, setError, setPreloader
} = myBookSlice.actions

export const selectBooks = (state: RootState) => state.myBook.books
export const selectError = (state: RootState) => state.myBook.errorMessage
export const selectPreloader = (state: RootState) => state.myBook.isLoading

//Get books from googleBooks
export const getBooksFromGoogle = (): AppThunk =>
  async (dispatch, getState) => {
    const category: string = getState().myBook.category
    const sorting: string = getState().myBook.sorting
    const searchValue: string = getState().myBook.searchValue
    const pageIndex: number = getState().myBook.pageIndex
    try {
      // activate preloader
      dispatch(setPreloader(true))
      //make a request for the server to receive books
      const currentBooks = await userAPI.getBooks(category, sorting, searchValue, pageIndex)
      dispatch(addBooks(currentBooks))
      // deactivate preloader
      dispatch(setPreloader(false))
    } catch (error: any) {
      //if axios return error
      dispatch(setError(error.message))
    }
  }

export default myBookSlice.reducer;
