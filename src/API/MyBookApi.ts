import axios from "axios";
import {BooksType} from "../mainTypes";

const instance = axios.create({
  baseURL: `https://www.googleapis.com/books/v1/volumes`
})

export const userAPI = {
  async getBooks(category: string, sorting: string, searchValue: string): Promise<BooksType> {
    return instance.get<BooksType>(`?q=${searchValue}+subject:${category}&orderBy=${sorting}&maxResults=30`)
      .then(res => res.data)
  },
}