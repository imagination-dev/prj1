import s from './styles.module.css'
import {classNames} from "../../utils/classNames.ts";
import {JSX, RefObject} from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
                        style={{justifyContent: 'flex-start', paddingLeft: '10px'}}
                        onClick={() => currentIndex === 1 ? undefined : swiperRef?.current?.slidePrev()}
                        className={classNames(s.btn_nav, currentIndex === 1 && s.btn_nav_disabled)}>
                        <div className={classNames(s.arrow, currentIndex === 1 && s.arrow_disabled)}>
                            <ArrowBackIcon sx={{
                                fontSize: '14px',
                                transition: '0.4s all',
                                color: currentIndex === 1 ? 'rgba(196, 196, 196, 1)' : 'rgba(0, 0, 0, 1)'
                            }}/>
                        </div>
                        {currentIndex === 1 ? 'Назад' : `Тема #${currentIndex - 1}`}
                    </div>
                    <div
                        style={{justifyContent: 'flex-end', paddingRight: '9px'}}
                        className={classNames(s.btn_nav, currentIndex + 1 > lengthItems && s.btn_nav_disabled)}
                        onClick={() => currentIndex + 1 > lengthItems ? undefined : swiperRef.current?.slideNext()}>
                        {currentIndex + 1 > lengthItems ? 'Вперед' : `Тема #${currentIndex + 1}`}

                        <div className={classNames(s.arrow, currentIndex + 1 > lengthItems && s.arrow_disabled)}>
                            <ArrowForwardIcon sx={{
                                fontSize: '14px',
                                transition: '0.4s all',
                                color: currentIndex + 1 > lengthItems ? 'rgba(196, 196, 196, 1)' : 'rgba(0, 0, 0, 1)'

                            }}/>
                        </div>
                    </div>
                </div>
            </div>

            {children}

        </div>
    );
};

export default NavigateProgram;