import {Swiper, SwiperSlide} from "swiper/react";
import {useState} from "react";
import DotsSwiper from "../../../common/components/dotsSwipper";
import NormalButton from "../../../common/ui-kit/normalButton";
import s from '../../requests/styles.module.css'
import {NavLink} from "react-router";

const SwiperContent = ({rows}: any) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const dots = Array.from({length: rows.length}, (_, b) => b)

    const extendedData = [...rows, ...rows];
    return (
        <div className={s.swiper}>
            <Swiper
                onActiveIndexChange={(e) => {
                    setCurrentIndex(e.realIndex % rows.length);
                }}
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
                                <p className={s.line_left}>Продкут</p>
                                <p className={s.line_right}>{el.product}</p>
                            </div>
                            <div className={s.line}>
                                <p className={s.line_left}>Тариф</p>
                                <p className={s.line_right}>{el.tariff}</p>
                            </div>
                            <div className={s.line}>
                                <p className={s.line_left}>Дата оплаты</p>
                                <p className={s.line_right}>{el.date_pay}</p>
                            </div>
                            <div className={s.line}>
                                <p className={s.line_left}>Дата активации</p>
                                <p className={s.line_right}>{el.date_activated}</p>
                            </div>
                            <div className={s.line}>
                                <p className={s.line_left}>Срок действия</p>
                                <p className={s.line_right}
                                   style={{
                                       fontFamily: 'Gilroy-Black,sans-serif',
                                       color: el.validity_period === 1 ? 'rgba(241, 0, 0, 1)' : 'rgba(38, 211, 103, 1)'
                                   }}
                                > {(el.validity_period === 1 && 'Закончился') ||
                                    (el.validity_period === 2 && 'Бесконечный') ||
                                    (el.validity_period)}</p>
                            </div>
                            <NavLink to={'/control-cards'} className={s.link}>
                                <NormalButton className={s.btn} onClick={() => {
                                }} w={430}
                                              bc={'rgba(38, 211, 103, 1)'}>
                                    Управление
                                </NormalButton>
                            </NavLink>
                        </div>
                    </SwiperSlide>
                })}
            </Swiper>
            <DotsSwiper items={dots} active={currentIndex}/>
        </div>
    );
};

export default SwiperContent;