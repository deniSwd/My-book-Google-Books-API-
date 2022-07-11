import React from 'react';
import {useAppDispatch, useAppSelector} from '../../store/hooks'
import {getBooksFromGoogle, selectBooks, selectPreloader, setPageIndex} from "../../store/slices/myBookSlice"
import {Book} from "../bookBox/Book"
import s from './Main.module.scss'
import {NavLink} from "react-router-dom"
import {Preloader} from "../preloader/Preloader"
import buttonPreloader from '../../assets/button-spin.svg'

export const Main = () => {
  const dispatch = useAppDispatch()
  // getting current books list from our reducer
  const currentBooks = useAppSelector(selectBooks)
  // getting isLoading value
  const preloader = useAppSelector(selectPreloader)
  // Displaying another 30 books by pressing button 'load more'
  const onLoadMore = () => {
    dispatch(setPageIndex())
    dispatch(getBooksFromGoogle())
  }

  return (
    <div className={s.main}>
      <div className={s.foundResults}>Found {currentBooks?.totalItems} results</div>
      <div className={s.booksField}>
        {/*displaying current books list*/}
        {!currentBooks ? <Preloader/>
          : currentBooks?.items.map((book, i) =>
            <div className={s.link} key={i}>
              <NavLink to={`/${book.id}`}>
                <Book book={book}/>
              </NavLink>
            </div>
          )}
      </div>
      <div onClick={onLoadMore}
           className={s.loadButton}>{
        preloader
          ? <img src={buttonPreloader} alt='loading...'/>
          : 'load more'
      }</div>
    </div>
  );
}
