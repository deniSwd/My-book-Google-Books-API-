
import {Main} from "./main/Main";
import {FC} from "react";
import {SelectedBook} from "./selectedBook/SelectedBook";
import {Route, Routes} from "react-router-dom";

export const RoutePage:FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/:bookId' element={<SelectedBook />} />
      </Routes>
    </div>
  )
}