import {Swiper, SwiperSlide} from "swiper/react";
import {useState} from "react";
import DotsSwiper from "../../../common/components/dotsSwipper";
import NormalButton from "../../../common/ui-kit/normalButton";
import s from '../../requests/styles.module.css'

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
                                <p className={s.line_left}>Метод привязки</p>
                                <p className={s.line_right}>
                                    {el.card_icon && <div className={s.icons_swiper}>
                                        <img className={s.icon_card_v2} src={el.bank_icon} alt="card"/>
                                        <img className={s.icon_card} src={el.card_icon} alt="card"/>
                                    </div>}
                                    {el.method ? el.method.split('|')[0] : 'Нет привязки'}
                                </p>
                            </div>
                            <div className={s.line}>
                                <p className={s.line_left}>Дата отвязки</p>
                                <p className={s.line_right}>{el.date}</p>
                            </div>

                            <NormalButton className={s.btn} onClick={el.status === 1 ? handleOpenModal : undefined}
                                          w={124}
                                          bc={el.status === 2 ? 'rgba(38, 211, 103, 1)' : 'rgba(0, 0, 0, 1)'}>
                                {el.status === 2 ? 'Привязать' : 'Отвязать'}
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