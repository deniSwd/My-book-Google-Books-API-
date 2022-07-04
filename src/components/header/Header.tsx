import React, {ChangeEvent, FC, useState} from 'react';
import s from './Header.module.scss';
import {getBooksFromGoogle, setCategory, setSearchValue, setSorting} from "../../store/slices/myBookSlice";
import {useAppDispatch} from "../../store/hooks";


export const Header: FC = () => {

  const dispatch = useAppDispatch()

 // Setting value from input field
  const [searchValue, setLocalSearchValue] = useState<string>('')
  const searchValueChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalSearchValue(e.target.value)
  }
 // Searching books
  const onSearch = () => {
    dispatch(setSearchValue(searchValue))
    dispatch(getBooksFromGoogle())
  }


  return (
    <header className={s.header}>
      <div className={s.headerTitle}>SEARCH for BOOKS</div>
      <div>
        <input type="text" onChange={searchValueChanged} value={searchValue}/>
        <button onClick={onSearch}>Search</button>
        <button onClick={() => setSearchValue('')}>Clear</button>
      </div>
      <div>
        <label htmlFor='categories'>Categories: </label>
        <select name="categories" id='categories' onChange={(e) => dispatch(setCategory(e.target.value))}>
          <option value="*">all</option>
          <option value="art">art</option>
          <option value="biography">biography</option>
          <option value="computers">computers</option>
          <option value="history">history</option>
          <option value="medical">medical</option>
          <option value="poetry">poetry</option>
        </select>
        <label htmlFor='sorting'>Sorting by </label>
        <select name='sorting' id='sorting' onChange={(e) => dispatch(setSorting(e.target.value))}>
          <option value="relevance"> relevance</option>
          <option value="newest">newest</option>
        </select>
      </div>
    </header>
  );
}
