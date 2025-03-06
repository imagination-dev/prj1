import s from '../styles.module.css'
import {Swiper, SwiperSlide} from "swiper/react";
import {useState} from "react";
import DotsSwiper from "../../../common/components/dotsSwipper";
import {status, StatusVariant} from "../index.tsx";
import NormalButton from "../../../common/ui-kit/normalButton";

const SwiperContent = ({rows, handleOpenModal}: any) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const dots = Array.from({length: rows.length}, (_, b) => b)

    const extendedData = [...rows, ...rows];
    return (
        <div className={s.swiper}>
            <Swiper
                onActiveIndexChange={(e) => {
                    setCurrentIndex(e.realIndex % rows.length);
                }}
                style={{
                    // alignItems: 'stretch !important',
                }}
                // autoHeight={false}

                centeredSlides={true}
                spaceBetween={20}
                slidesPerView={1.18}
                loop
            >

                {extendedData.map((el: any, i) => {
                    return <SwiperSlide
                        key={el.id + i}
                    >
                        <div className={s.item}>
                            <div className={s.line}>
                                <p className={s.line_left}>Обращение</p>
                                <p className={s.line_right}>{el.name}</p>
                            </div>
                            <div className={s.line}>
                                <p className={s.line_left}>Дата обращения</p>
                                <p className={s.line_right}>{el.date}</p>
                            </div>
                            <div className={s.line}>
                                <p className={s.line_left}>Статус</p>
                                <p className={s.line_right}
                                   style={{
                                       fontFamily: el.status === 3 ? 'Gilroy-Black,sans-serif' : 'Gilroy-Regular, sans-serif',
                                       color:
                                           (el.status === 2 && 'rgba(118, 146, 255, 1)') ||
                                           (el.status === 3 && 'rgba(38, 211, 103, 1)') ||
                                           'rgba(42, 42, 44, 1)'
                                   }}
                                > {status[el.status as StatusVariant]}</p>
                            </div>

                            <NormalButton className={s.btn} onClick={() => handleOpenModal(el.name)} w={110}
                                          bc={'rgba(38, 211, 103, 1)'}>
                                Открыть
                            </NormalButton>
                        </div>
                    </SwiperSlide>
                })}
            </Swiper>
            <DotsSwiper items={dots} active={currentIndex}/>
        </div>
    );
};

export default SwiperContent;