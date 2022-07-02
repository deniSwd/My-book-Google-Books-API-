import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {BooksType} from '../../mainTypes';
import {AppThunk, RootState} from '../store';
import {userAPI} from "../../API/MyBookApi";

export type myBookState = {
  books: BooksType | null
}

const initialState: myBookState = {
  books: null,
};


/*export const incrementAsync = createAsyncThunk(
  'main/fetchCount',
  async (amount: number) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);*/

export const myBookSlice = createSlice({
  name: 'myBook',
  initialState,
  reducers: {
    /**
     * Set books
     */
    setBooks: (state, action: PayloadAction<BooksType>) => {
      state.books = action.payload;
    }
  },
});

export const {setBooks} = myBookSlice.actions;

export const selectBooks = (state: RootState) => state.myBook.books;
/**
 * Get books from googleBooks
 * @param category - book category
 * @param sorting - sorting parameter
 */
export const getBooksFromGoogle = (category: string, sorting: string): AppThunk =>
    async (dispatch) => {
      const currentBooks = await userAPI.getBooks(category, sorting)
      dispatch (setBooks(currentBooks))
    }


export default myBookSlice.reducer;
