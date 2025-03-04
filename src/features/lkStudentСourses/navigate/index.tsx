import s from './styles.module.css'
import {classNames} from "../../../common/utils/classNames.ts";
import play_icon from '../../../common/assets/play_icon.svg'
import completed_icon from '../../../common/assets/completed_icon.svg'
import lock_icon from '../../../common/assets/lock_icon.svg'
import {useState} from "react";

const mock_topics = [
    {title: "Урок #1: Знакомство с каллиграфией", id: 1, status: 0},
    {title: "Урок #1: Знакомство с каллиграфией", id: 2, status: 1},
    {title: "Урок #1: Знакомство с каллиграфией", id: 3, status: 2},
]

type IconType = Record<string, string>
const Navigate = () => {
    const [chooseTopic, setChooseTopic] = useState(1)
    const iconType: IconType = {
        0: play_icon,
        1: completed_icon,
        2: lock_icon,
    }
    return (
        <div className={s.box}>
            <div className={s.box_title_nav}>
                <h3 className={s.title}>Программа <br/> обучения</h3>

                <div className={s.navigate_buttons}>
                    <div className={classNames(s.btn_nav, s.btn_nav_disabled)}>Назад</div>
                    <div className={classNames(s.btn_nav)}>Тема #2</div>
                </div>
            </div>

            <div className={s.box_topics}>
                <h3 className={s.title_topic}>Тема #1: Знакомство с каллиграфией</h3>

                <div className={s.topics}>
                    {mock_topics.map((el) => {
                        return <div key={el.id} onClick={() => setChooseTopic(el.id)}
                                    className={classNames(s.topic, chooseTopic === el.id && s.active_topic)}>
                            <img className={s.topic_icon} src={iconType[el.status]} alt=""/>
                            <p className={s.topic_title}>{el.title}</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
};

export default Navigate;