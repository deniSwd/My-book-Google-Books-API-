import {FC} from "react";
import s from '../error/error.module.scss'

// our error message in props
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