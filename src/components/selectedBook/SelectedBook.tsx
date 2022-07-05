import React, {FC} from 'react';
import s from './SelectedBook.module.scss'
import {NavLink, useParams} from "react-router-dom";
import {useAppSelector} from "../../store/hooks";
import {selectBooks} from "../../store/slices/myBookSlice";

export const SelectedBook: FC = () => {

  const {bookId} = useParams()
  const currentBooks = useAppSelector(selectBooks)
  // Finding selected book
  const selectedBook = currentBooks?.items.find(b => bookId === b.id)

  return (
    <div className={s.selectedBook}>
      <div>
        {selectedBook?.volumeInfo.title}
      </div>
      <NavLink to={'/'}>
        <div>
          Back on main
        </div>
      </NavLink>
    </div>
  )
}