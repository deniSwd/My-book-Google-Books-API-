import React from 'react';
import {useAppSelector, useAppDispatch} from '../../store/hooks';
import styles from './Main.module.css';
import {selectBooks} from "../../store/slices/myBookSlice";

export const Main = () => {
  /* const count = useAppSelector(selectCount);
   const dispatch = useAppDispatch();*/
  const currentBooks = useAppSelector(selectBooks)

  return (
    <div>
      {currentBooks?.items.map(b=>
        <div>
          {b.volumeInfo.title}
      </div>)}
    </div>
  );
}
