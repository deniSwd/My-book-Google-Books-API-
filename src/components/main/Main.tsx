import React from 'react';
import {useAppSelector} from '../../store/hooks';
import {selectBooks} from "../../store/slices/myBookSlice";

export const Main = () => {
  /* const count = useAppSelector(selectCount);
   const dispatch = useAppDispatch();*/
  const currentBooks = useAppSelector(selectBooks)

  return (
    <div>
      <div>{currentBooks?.totalItems}</div>
      {currentBooks?.items.map(b=>
        <div>
          {b.volumeInfo.title}
      </div>)}
    </div>
  );
}
