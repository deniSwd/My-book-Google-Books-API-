import React, {FC, useEffect} from 'react'
import './App.css'
import {Header} from "./components/header/Header"
import {Main} from "./components/main/Main"
import {useAppDispatch} from "./store/hooks";
import {getBooksFromGoogle} from './store/slices/myBookSlice';

const App: FC = () => {
  const dispatch = useAppDispatch()
  // Displaying all books after first render
  useEffect(() => {
    dispatch(getBooksFromGoogle('*', 'relevance'))
  }, [dispatch])

  return (
    <div>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
