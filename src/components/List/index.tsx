import React from 'react';
import { ITask } from '../../types/tasks';
import Item from './Item';
import style from './List.module.scss';

function List({ tasks }: { tasks: ITask[] }) {
    return (
        <aside className={style.tasksList}>
            <h2>Tasks of the day</h2>
            <ul>
                {tasks.map((item, index) => (
                    <Item
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;