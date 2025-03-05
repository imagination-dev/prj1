import s from './styles.module.css'
import calendar_icon from '../../../common/assets/calendar.svg'
import edit_icon from '../../../common/assets/edit.svg'
import star_icon from '../../../common/assets/star.svg'
import {Progress as ProgressLine} from '../../../common/components/progress'
import {useEffect, useState} from "react";

const Progress = () => {
    const random = 76
    const [count, setCount] = useState<number>(0)

    useEffect(() => {
        const animationDuration = 1000; // Длительность анимации в мс
        const startTime = Date.now();
        const startValue = count; // Начальное значение
        const endValue = random;
        const endTime = startTime + animationDuration;

        const animate = () => {
            const now = Date.now();
            const progress = Math.min(1, (now - startTime) / animationDuration);
            const currentValue = startValue + (endValue - startValue) * progress;

            setCount(Math.round(currentValue));

            if (now < endTime) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [random]);
    return (
        <div className={s.box}>
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
                <ProgressLine value={count}/>
                <p className={s.percent}><span>{`${count.toFixed(0)}%`}</span></p>
            </div>
        </div>
    );
};

export default Progress;