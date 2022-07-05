import React, {FC, useEffect} from 'react'
import './App.css'
import {Header} from "./components/header/Header"
import {useAppDispatch} from "./store/hooks";
import {getBooksFromGoogle} from './store/slices/myBookSlice';
import {RoutePage} from "./components/RoutePage";

const App: FC = () => {
  const dispatch = useAppDispatch()
  // Displaying 30 books with default settings after first render
  useEffect(() => {
    dispatch(getBooksFromGoogle())
  }, [dispatch])

  return (
    <div>
      <Header/>
      <RoutePage/>
    </div>
  );
}

export default App;
