import s from './styles.module.css'
import calendar_icon from '../../../common/assets/calendar.svg'
import edit_icon from '../../../common/assets/edit.svg'
import star_icon from '../../../common/assets/star.svg'
import {Progress as ProgressLine} from '../../../common/components/progress'
import {classNames} from "../../../common/utils/classNames.ts";

const Progress = () => {
    return (
        <div className={s.box}>
            <div className={s.box_top}>
                <div className={classNames(s.box_top_item,s.box_top_item_1)}>
                    <p className={s.title}>
                        <img src={calendar_icon} alt="calendar_icon"/>
                        Дата старта:</p>
                    <p className={classNames(s.sub_title, s.sub_title_v2)}>01.01.2024</p>
                </div>
                <div className={classNames(s.box_top_item,s.box_top_item_2)}>
                    <p className={s.title}>
                        <img src={edit_icon} alt="edit_icon"/>
                        Название курса:</p>
                    <p className={s.sub_title}>Каллиграфия пробный доступ</p>
                </div>
                <div className={classNames(s.box_top_item,s.box_top_item_3)}>
                    <p className={s.title}>
                        <img src={star_icon} alt="star_icon"/>
                        Средняя оценка:</p>
                    <p className={s.sub_title}><span>4</span>/5</p>
                </div>
            </div>
            <div className={s.box_bottom}>
                <ProgressLine value={63}/>
            </div>
        </div>
    );
};

export default Progress;