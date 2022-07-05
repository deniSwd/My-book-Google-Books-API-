import React, {ChangeEvent, FC, useState} from 'react'
import s from './Header.module.scss'
import {getBooksFromGoogle, setCategory, setSearchValue, setSorting} from "../../store/slices/myBookSlice"
import {useAppDispatch} from "../../store/hooks"
import searchSmall from '../../assets/searchSmall.png'
import clear from '../../assets/clear.png'

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
      <div className={s.inputBox}>
        <input type="text"
               onChange={searchValueChanged}
               value={searchValue}
               className={s.input}/>
        <div className={s.inputButton}>
          <img src={clear}
               className={s.clear}
               onClick={() => setLocalSearchValue('')} alt='X'/>
          <img src={searchSmall}
               className={s.search}
               onClick={onSearch} alt='srch'/>
        </div>
      </div>
      <div className={s.selectsWrapper}>
        <div className={s.selectField}>
          <div>Categories: </div>
          <select className={s.select} name="categories" id='categories'
                  onChange={(e) => dispatch(setCategory(e.target.value))}>
            <option value="*">all</option>
            <option value="art">art</option>
            <option value="biography">biography</option>
            <option value="computers">computers</option>
            <option value="history">history</option>
            <option value="medical">medical</option>
            <option value="poetry">poetry</option>
          </select>
        </div>
        <div className={s.selectField}>
          <div>Sorting by </div>
          <select className={s.select} name='sorting' id='sorting' onChange={(e) => dispatch(setSorting(e.target.value))}>
            <option value="relevance"> relevance</option>
            <option value="newest">newest</option>
          </select>
        </div>
      </div>
    </header>
  );
}
