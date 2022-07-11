import React, {FC} from 'react';
import {ItemType} from "../../mainTypes";
import s from './Book.module.scss'
import bookImg from '../../assets/smallbook.jpg'

//our selected book in props
type BookPropsType = {
  book: ItemType
}

export const Book: FC<BookPropsType> = ({book}) => {

  return (
    <div className={s.bookBox}>
      <div className={s.coverImg}>
        <img src={book.volumeInfo.imageLinks?.thumbnail ?? bookImg} alt=''/>
      </div>
      <div className={s.bookInfo}>
        <div className={s.categories}>
          { book.volumeInfo.categories?.[0] ?? ''}
        </div>
        <div className={s.title}>
          {book.volumeInfo.title}
        </div>
        <div className={s.authors}>
          {book.volumeInfo.authors?.map((author,i)=>
            <div className={s.author} key={i}>{author}</div>) ?? ''}
        </div>
      </div>
    </div>
  )
}
