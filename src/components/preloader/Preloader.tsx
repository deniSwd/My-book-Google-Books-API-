import {FC} from "react"
import preloader from '../../assets/preloader.gif'
import s from './Preloader.module.scss'

export const Preloader: FC = () => {
  return (
    <div className={s.preloader}>
      <img src={preloader} alt='loading...'/>
    </div>
  )
}