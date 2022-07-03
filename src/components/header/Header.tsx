import React, {FC, useEffect, useState} from 'react';
import s from './Header.module.css';
import {
  getBooksFromGoogle,
  selectCategories,
  selectSorting,
  setCategory,
  setSorting
} from "../../store/slices/myBookSlice";
import {useAppDispatch, useAppSelector} from "../../store/hooks";


export const Header: FC = () => {
  const categories = useAppSelector(selectCategories)
  const sorting = useAppSelector(selectSorting)
  const dispatch = useAppDispatch()

  // Displaying all books after first render
  useEffect(() => {
    dispatch(getBooksFromGoogle(categories, sorting, searchValue ))
  }, [])

  const[searchValue, setSearchValue] = useState<string>('')
  const searchValueChanged = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const onSearch=()=>{
    dispatch(getBooksFromGoogle(categories, sorting, searchValue))
    setSearchValue('')
  }


  return (
    <header className={s.header}>
      <h1>SEARCH for BOOKS</h1>
      <div>
        <input type="text" onChange={searchValueChanged} value={searchValue}/>
        <button onClick={onSearch}>Search</button>
      </div>
      <div>
        <label htmlFor='categories' >Categories: </label>
        <select name="categories" id='categories' onChange={(e)=>dispatch(setCategory(e.target.value))}>
          <option value="*">all</option>
          <option value="art">art</option>
          <option value="biography">biography</option>
          <option value="computers">computers</option>
          <option value="history">history</option>
          <option value="medical">medical</option>
          <option value="poetry">poetry</option>
        </select>
        <label htmlFor='sorting'>Sorting by </label>
        <select name='sorting' id='sorting' onChange={(e)=>dispatch(setSorting(e.target.value))}>
          <option value="relevance"> relevance</option>
          <option value="newest">newest</option>
        </select>
      </div>
    </header>
  );
}
