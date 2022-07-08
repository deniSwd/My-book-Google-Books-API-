import {FC} from "react";
import s from '../error/error.module.scss'

type ErrorProps = {
  message: string
}

export const Error: FC<ErrorProps> = ({message}) => {
  return (
    <div className={s.errorMessage}>
      {message}
    </div>
  )
}