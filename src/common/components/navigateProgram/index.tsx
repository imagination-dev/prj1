import s from './styles.module.css'
import {classNames} from "../../utils/classNames.ts";
import {JSX, RefObject} from "react";

interface Props {
    children: JSX.Element
    currentIndex: number
    lengthItems: number
    swiperRef: RefObject<any>
}

const NavigateProgram = ({children, currentIndex, lengthItems, swiperRef}: Props) => {
    return (
        <div className={s.box}>
            <div className={s.box_title_nav}>
                <h3 className={s.title}>Программа <br/> обучения</h3>

                <div className={s.navigate_buttons}>
                    <div
                        onClick={() => currentIndex === 1 ? undefined : swiperRef?.current?.slidePrev()}
                        className={classNames(s.btn_nav, currentIndex === 1 && s.btn_nav_disabled)}>
                        {currentIndex === 1 ? 'Назад' : `Тема #${currentIndex - 1}`}
                    </div>
                    <div className={classNames(s.btn_nav, currentIndex + 1 > lengthItems && s.btn_nav_disabled)}
                         onClick={() => currentIndex + 1 > lengthItems ? undefined : swiperRef.current?.slideNext()}>{currentIndex + 1 > lengthItems ? 'Вперед' : `Тема #${currentIndex + 1}`}</div>
                </div>
            </div>

            {children}

        </div>
    );
};

export default NavigateProgram;