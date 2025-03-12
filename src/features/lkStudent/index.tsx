import img_1 from '../../common/assets/swiper/1.webp'
import img_2 from '../../common/assets/swiper/2.webp'
import img_3 from '../../common/assets/swiper/3.webp'
import img_4 from '../../common/assets/swiper/4.webp'
import img_5 from '../../common/assets/swiper/5.webp'
import img_6 from '../../common/assets/swiper/6.webp'

import s from './styles.module.css'
import Wrapper from "../../common/components/wrapper";
import {Swiper, SwiperSlide} from "swiper/react";
import {JSX, useRef, useState} from "react";
import {useMediaQuery} from "@mui/material";
// @ts-ignore
import 'swiper/css';
import '../../index.css'
import DotsSwiper from "../../common/components/dotsSwipper";
import ArrowSwiper from "../../common/components/arrowSwipper";
import SlideItem from "./slideItem";

interface ISwiperItem {
    title: JSX.Element
    type: 'unlock' | 'lock'
    img: string
    id: number
    progress?: number
}

const swiperData: ISwiperItem[] = [
    {title: <>Каллиграфия <br/> пробный доступ</>, type: 'lock', img: img_1, id: 1},
    {title: <>Каллиграфия <br/> полный доступ</>, type: 'lock',progress:42, img: img_2, id: 2},
    {title: <>леттеринг <br/> полный доступ</>, type: 'lock', img: img_3, id: 3},
    {title: <>Sketching <br/> акварелью</>, type: 'unlock', img: img_4, id: 4},
    {title: <>Каллиграфия <br/> полный доступ</>, type: 'lock',progress:87, img: img_5, id: 5},
    {title: <>Каллиграфия <br/> пробный доступ</>, type: 'unlock', img: img_6, id: 6},
    {title: <>Каллиграфия <br/> полный доступ</>, type: 'lock',progress:20, img: img_5, id: 1},
    {title: <>Каллиграфия <br/> пробный доступ</>, type: 'lock', img: img_6, id: 2},
    {title: <>леттеринг <br/> полный доступ</>, type: 'lock', img: img_3, id: 3},
]

const LkStudent = () => {
    const query768 = useMediaQuery('(max-width:768px)');
    const swiperRef = useRef<any>(null);
    const [currentIndex, setCurrentIndex] = useState(0)


    const dots = Array.from({length: swiperData.length}, (_, b) => b)

    return (
        <Wrapper className={s.wrapper_LkStudent}>
            <>
                <h2 className={s.main_title}>Программы обучения</h2>

                <div className={s.swiper_wrapper_container}>
                    <main className={s.main}>
                        <div className={s.navigate}>
                            <ArrowSwiper type={'left'} onClick={() => {
                                //@ts-ignore
                                swiperRef?.current?.slidePrev()
                            }}/>
                            <ArrowSwiper type={'right'} onClick={() => {
                                //@ts-ignore
                                swiperRef.current?.slideNext()
                            }}/>
                        </div>
                        <Swiper
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            onActiveIndexChange={(e) => {
                                setCurrentIndex(e?.realIndex)
                            }}
                            slidesPerView={'auto'}
                            slidesPerGroup={1}
                            loop={true}
                            centeredSlides={query768}
                            spaceBetween={30}
                        >
                            {swiperData.map((el, i) => {
                                return <SwiperSlide className={s.swiper_slide} key={`${i} + ${el.id}`}
                                >
                                    <SlideItem progress={el.progress} type={el.type} title={el.title} img={el.img}/>

                                </SwiperSlide>
                            })}
                        </Swiper>
                    </main>
                    {query768 && <DotsSwiper items={dots} active={currentIndex}/>}
                </div>
            </>
        </Wrapper>

    )
        ;
};

export default LkStudent;