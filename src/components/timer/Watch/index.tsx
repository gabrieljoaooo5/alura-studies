import style from './Watch.module.scss';

interface Props {
    time: Number | undefined
}

export default function Watch({ time = 0 }: Props) {
    const minutes = Math.floor(time.valueOf() / 60);
    const seconds = time.valueOf() % 60;
    const [minuteTen, minuteOne] = String(minutes).padStart(2, '0');
    const [secondTen, secondOne] = String(seconds).padStart(2, '0');

    return (
       <>
        <span className={style.numberWatch}>{minuteTen}</span>
        <span className={style.numberWatch}>{minuteOne}</span>
        <span className={style.division}>:</span>
        <span className={style.numberWatch}>{secondTen}</span>
        <span className={style.numberWatch}>{secondOne}</span>
       </> 
    )
}