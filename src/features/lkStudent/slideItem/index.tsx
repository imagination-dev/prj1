import {JSX, useState} from 'react';
import s from '../styles.module.css'
import {Progress} from "../../../common/components/progress";
import UnlockedIcon from '../../../common/assets/locks/unlocked.svg?react'
import LockedIcon from '../../../common/assets/locks/locked.svg?react'
import LockedHoverIcon from '../../../common/assets/locks/locked_hover.svg?react'
import {classNames} from "../../../common/utils/classNames.ts";
import {useNavigate} from "react-router";

interface Props {
    title: JSX.Element
    type: 'lock' | 'unlock'
    progress?: number | null
    img: string
}

const SlideItem = ({title, type, img, progress = null}: Props) => {
    const navigate = useNavigate()

    const [cursorIsInside, setCursorIsInside] = useState(false)

    const handlenavigateAllCurses = () => navigate('/lk_student_courses')
    return (
        <div className={s.item} style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundRepeat: "no-repeat",
            transition: "0.4s all",
        }}>
            <div className={s.info_box}>
                <h3 className={s.title}>{title}</h3>
                <div className={classNames(s.btn, type === 'lock' && s.btn_lock)}
                     onClick={handlenavigateAllCurses}
                     onMouseEnter={() => setCursorIsInside(true)}
                     onMouseLeave={() => setCursorIsInside(false)}
                >
                    <div className={s.icon_btn}>
                        {type === 'unlock' && <UnlockedIcon/>}
                        {type === 'lock' && (cursorIsInside ? <LockedHoverIcon/> : <LockedIcon/>)}
                    </div>

                    {type === 'unlock' && 'Начать учиться'}
                    {type === 'lock' && (cursorIsInside ? 'Открыть доступ' : 'Доступ закрыт')}
                </div>
            </div>

            {progress && <div className={s.progress_box}>
                <Progress value={progress} isWhiteBackground={true} classNameLabel={s.progress_label}/>
            </div>}

        </div>
    );
};

export default SlideItem;