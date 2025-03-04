import s from './styles.module.css'
import calendar_icon from '../../../common/assets/calendar.svg'
import edit_icon from '../../../common/assets/edit.svg'
import star_icon from '../../../common/assets/star.svg'
import {Progress as ProgressLine} from '../../../common/components/progress'
import {useState} from "react";

const Progress = () => {
    const random = Math.random() * 100
    const [_, rerender] = useState(false)
    return (
        <div className={s.box} onClick={() => rerender((prev) => !prev)}>
            <div className={s.box_top}>
                <div className={s.box_top_item}>
                    <p className={s.title}>
                        <img src={calendar_icon} alt="calendar_icon"/>
                        Дата старта:</p>
                    <p className={s.sub_title}>01.01.2024</p>
                </div>
                <div className={s.box_top_item}>
                    <p className={s.title}>
                        <img src={edit_icon} alt="edit_icon"/>
                        Название курса:</p>
                    <p className={s.sub_title}>Каллиграфия пробный доступ</p>
                </div>
                <div className={s.box_top_item}>
                    <p className={s.title}>
                        <img src={star_icon} alt="star_icon"/>
                        Средняя оценка:</p>
                    <p className={s.sub_title}><span>4</span>/5</p>
                </div>
            </div>
            <div className={s.box_bottom}>
                <ProgressLine value={random}/>
                <p className={s.percent}><span>{`${random.toFixed(0)}%`}</span>/ 100%</p>
            </div>
        </div>
    );
};

export default Progress;