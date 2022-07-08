import React, {FC, useEffect} from 'react'
import './App.css'
import {Header} from "./components/header/Header"
import {useAppDispatch, useAppSelector} from "./store/hooks";
import {getBooksFromGoogle, selectError} from './store/slices/myBookSlice';
import {RoutePage} from "./components/RoutePage";
import {Error} from "./components/error/error";

const App: FC = () => {
  const errorMessage = useAppSelector(selectError)
  const dispatch = useAppDispatch()
  // Displaying 30 books with default settings after first render
  useEffect(() => {
    dispatch(getBooksFromGoogle())
  }, [dispatch])

  return (
    <div>
      <Header/>
      {errorMessage.length > 0 ? <Error message={errorMessage}/> : <RoutePage/>}
    </div>
  );
}

export default App;
