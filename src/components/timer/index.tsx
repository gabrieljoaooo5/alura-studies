import Button from '../Button';
import Watch from './Watch';
import style from './Timer.module.scss';
import { TimeToSeconds } from '../../common/utils/time';
import { ITask } from '../../types/tasks';

interface Props {
    selected: ITask | undefined
}

export default function Timer({ selected }: Props) {
    return (
        <div className={style.timer}>
            <p className={style.title}>Choose a card and start the timer</p>
            <div className={style.watchWrapper}>
                <Watch />
            </div>
            <Button>
                Start
            </Button>
        </div>

    )
}