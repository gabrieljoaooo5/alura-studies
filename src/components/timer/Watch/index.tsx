import style from './Watch.module.scss';

export default function Watch() {
    return (
       <>
        <span className={style.numberWatch}>0</span>
        <span className={style.numberWatch}>0</span>
        <span className={style.division}>:</span>
        <span className={style.numberWatch}>0</span>
        <span className={style.numberWatch}>0</span>
       </> 
    )
}