import React, {FC} from 'react';
import s from './SelectedBook.module.scss'
import {NavLink, useParams} from "react-router-dom";
import {useAppSelector} from "../../store/hooks";
import {selectBooks} from "../../store/slices/myBookSlice";
import bookImg from "../../assets/smallbook.jpg";

export const SelectedBook: FC = () => {

  const {bookId} = useParams()
  const currentBooks = useAppSelector(selectBooks)
  // Finding selected book
  const selectedBook = currentBooks?.items.find(b => bookId === b.id)
  const book = selectedBook?.volumeInfo

  return (
    <div className={s.selectedBook}>
      <div className={s.bookCover}>
        <img src={book?.imageLinks?.thumbnail ?? bookImg} alt=''/>
      </div>
      <div className={s.bookInfo}>
        <div className={s.categories}>
          {book?.categories?.map((category, i) =>
            <div key={i}>
              {category}
            </div>) ?? ''}
        </div>
        <div className={s.title}>
          {book?.title}
        </div>
        <div className={s.authors}>
          {book?.authors?.map((author, i) =>
            <div className={s.author} key={i}>{author}</div>) ?? ''}
        </div>
        <div className={s.description}>
          {book?.description}
        </div>
        <div className={s.buttonSpace}>
          <NavLink to={'/'} className={s.backButton}>
            Back on main
          </NavLink>
        </div>
      </div>
    </div>
  )
}