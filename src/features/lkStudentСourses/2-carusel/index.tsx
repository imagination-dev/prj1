import s from './styles.module.css'
import {Swiper, SwiperSlide} from "swiper/react";
import book from '../../../common/assets/book.webp'
import {useRef, useState} from "react";
import './style.css'
import DotsSwiper from "../../../common/components/dotsSwipper";
import ArrowSwiper from "../../../common/components/arrowSwipper";
import {classNames} from "../../../common/utils/classNames.ts";
import {useMediaQuery} from "@mui/material";

const mock = [
    {
        title: <>Каллиграфия. <br/>
            Полное погружение</>,
        id: 1
    },
    {
        title: <>Каллиграфия 2. <br/>
            Полное погружение</>,
        id: 2
    },
    {
        title: <>Каллиграфия 3. <br/>
            Полное погружение</>,
        id: 3
    },
    {
        title: <>Каллиграфия 4. <br/>
            Полное погружение</>,
        id: 4
    },
]
const Carousel = () => {
    const query768 = useMediaQuery('(max-width:768px)');
    const swiperRef = useRef<unknown>(null);

    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const dots = Array.from({length: mock.length}, (_, b) => b)

    return (
        <div className={s.carusel}>
            <div className={s.arrows_left}>
                <ArrowSwiper type={'left'} onClick={() => {
                    //@ts-ignore
                    swiperRef?.current?.slidePrev()
                }}/>
            </div>
            <div className={classNames(s.arrows_left, s.arrows_right)}>
                <ArrowSwiper type={'right'} onClick={() => {
                    //@ts-ignore
                    swiperRef.current?.slideNext()
                }}/>
            </div>

            <Swiper
                className={'test'}
                spaceBetween={30}
                slidesPerView={1}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                // allowTouchMove={query768}
                onActiveIndexChange={(e) => {
                    setCurrentIndex(e?.realIndex)
                }}
                loop
            >
                {mock.map((el, i) => {
                    return <SwiperSlide
                        key={`${i} + ${el.id}`}
                    >
                        <div className={s.item} style={{
                            backgroundImage: `url(${book})`,
                            backgroundSize: 'cover',
                            backgroundPosition: '0 0',
                            backgroundRepeat: 'no-repeat'
                        }}>
                            <div className={s.item_content}>
                                <h3 className={s.title}>{el.title}</h3>
                                <div className={s.btn}>Узнать подробнее</div>
                            </div>
                        </div>
                    </SwiperSlide>
                })}
            </Swiper>


            <div className={s.dots_wrapper}>
                <DotsSwiper type={query768 ? 'dark' : 'light'} items={dots} active={currentIndex}/>
            </div>
        </div>
    );
};

export default Carousel;