import React, {FC, useEffect} from 'react'
import './App.css'
import {Header} from "./components/header/Header"
import {Main} from "./components/main/Main"
import {useAppDispatch, useAppSelector} from "./store/hooks";
import {getBooksFromGoogle, selectCategories, selectSorting} from './store/slices/myBookSlice';

const App: FC = () => {
  const dispatch = useAppDispatch()
  // Displaying 30 books with default settings after first render
  useEffect(() => {
    dispatch(getBooksFromGoogle())
  }, [dispatch])

  return (
    <div>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
