import React from 'react';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {getBooksFromGoogle, selectBooks, setPageIndex} from "../../store/slices/myBookSlice";
import {Book} from "../bookPage/Book";
import s from './Main.module.scss'

export const Main = () => {
  const dispatch = useAppDispatch()
  const currentBooks = useAppSelector(selectBooks)
  // Displaying another 30 books
  const onLoadMore = () => {
    dispatch(setPageIndex())
    dispatch(getBooksFromGoogle())
  }

  return (
    <div className={s.main}>
      <div>Found {currentBooks?.totalItems} results</div>
      <div className={s.booksField}>
      {currentBooks?.items.map((book, i) =>
        <Book book={book} key={i}/>
      )}
      </div>
      <div onClick={onLoadMore} className={s.loadButton}>Load more...</div>
    </div>
  );
}
