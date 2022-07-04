import React, {FC} from 'react';
import {ItemType} from "../../mainTypes";
import s from './Book.module.scss'
import bookImg from '../../assets/smallbook.jpg'

type BookPropsType = {
  book: ItemType
}

export const Book: FC<BookPropsType> = ({book}) => {
  /* const count = useAppSelector(selectCount);
   const dispatch = useAppDispatch();*/

  return (
    <div className={s.bookBox}>
      <img src={book.volumeInfo.imageLinks?.thumbnail ?? bookImg} alt=''/>
      <h4>
        {book.volumeInfo.title}
      </h4>
    </div>
  )
}
