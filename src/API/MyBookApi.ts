import axios from "axios";
import {BooksType} from "../mainTypes";

const instance = axios.create({
  baseURL: `https://www.googleapis.com/books/v1/volumes`
})

export const userAPI = {
  async getBooks(category: string, sorting: string, searchValue: string, pageIndex: number): Promise<BooksType> {
    const startIndex = pageIndex * 30
    return instance.get<BooksType>
    (`?q=${searchValue}+subject:${category}&orderBy=${sorting}&startIndex=${startIndex}&maxResults=30&key=AIzaSyBrHg8eoJcWhtgdFxzDxx83Ltih5zuW67w`)
      .then(res => res.data)
  },
}