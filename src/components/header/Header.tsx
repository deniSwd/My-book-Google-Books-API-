import React, {FC} from 'react';
import {useAppSelector, useAppDispatch} from '../../store/hooks';
import s from './Header.module.css';



export const Header: FC = () => {
  /* const count = useAppSelector(selectCount);
   const dispatch = useAppDispatch();*/

  return (
    <header className={s.header}>
      <h1>SEARCH for BOOKS</h1>
      <div>
        <input type="text"/>
        <button>Search</button>
      </div>
      <div>
        <label htmlFor='categories' >Categories: </label>
        <select name="categories" id='categories'>
          <option value="all">all</option>
          <option value="art">art</option>
          <option value="biography">biography</option>
          <option value="computers">computers</option>
          <option value="history">history</option>
          <option value="medical">medical</option>
          <option value="poetry">poetry</option>
        </select>
        <label htmlFor='sorting'>Sorting by </label>
        <select name='sorting' id='sorting'>
          <option value="relevance"> relevance</option>
          <option value="newest">newest</option>
        </select>
      </div>
    </header>
  );
}
