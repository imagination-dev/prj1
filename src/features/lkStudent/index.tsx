import img_1 from '../../common/assets/swiper/1.webp'
import img_2 from '../../common/assets/swiper/2.webp'
import img_3 from '../../common/assets/swiper/3.webp'
import img_4 from '../../common/assets/swiper/4.webp'
import img_5 from '../../common/assets/swiper/5.webp'
import img_6 from '../../common/assets/swiper/6.webp'

import s from './styles.module.css'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Wrapper from "../../common/components/wrapper";
import {Swiper, SwiperSlide} from "swiper/react";
import {JSX, useRef, useState} from "react";
import {useMediaQuery} from "@mui/material";
// @ts-ignore
import 'swiper/css';
import DotsSwiper from "../../common/components/dotsSwipper";
import ArrowSwiper from "../../common/components/arrowSwipper";

interface ISwiperItem {
    title: JSX.Element
    type: number
    img: string
    id: number
}

const swiperData: ISwiperItem[] = [
    {title: <>Каллиграфия <br/> пробный доступ</>, type: 1, img: img_1, id: 1},
    {title: <>Каллиграфия <br/> полный доступ</>, type: 2, img: img_2, id: 2},
    {title: <>леттеринг <br/> полный доступ</>, type: 3, img: img_3, id: 3},
    {title: <>Sketching <br/> акварелью</>, type: 3, img: img_4, id: 4},
    {title: <>Каллиграфия <br/> полный доступ</>, type: 2, img: img_5, id: 5},
    {title: <>Каллиграфия <br/> пробный доступ</>, type: 1, img: img_6, id: 6},
    {title: <>Каллиграфия <br/> полный доступ</>, type: 2, img: img_5, id: 1},
    {title: <>Каллиграфия <br/> пробный доступ</>, type: 1, img: img_6, id: 2},
    {title: <>леттеринг <br/> полный доступ</>, type: 3, img: img_3, id: 3},
]

const LkStudent = () => {
    const query768 = useMediaQuery('(max-width:768px)');
    const swiperRef = useRef<unknown>(null);
    const [currentIndex, setCurrentIndex] = useState(0)

    const dots = Array.from({length: swiperData.length}, (_, b) => b)

    return (
        <Wrapper className={s.wrapper_LkStudent}>
            <>
                <h2 className={s.main_title}>Программы обучения</h2>

                <div className={s.swiper_box}>
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
                        centeredSlides={true}
                        spaceBetween={30}
                        slidesPerView={'auto'}
                        loop
                    >
                        {swiperData.map((el, i) => {
                            return <SwiperSlide style={{width: '263px'}} key={`${i} + ${el.id}`}
                            >
                                <div className={s.item} style={{
                                    backgroundImage: `url(${el.img})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: "no-repeat",
                                    transition: "0.4s all",
                                }}>
                                    <div className={s.info_box}>
                                        <h3 className={s.title}>{el.title}</h3>
                                        <div className={s.btn} style={{
                                            color:
                                                el.type === 1 && 'rgba(42, 42, 44, 1)' ||
                                                el.type === 2 && 'rgba(255, 255, 255, 1)' ||
                                                el.type === 3 && 'rgba(255, 255, 255, 1)' || '#fff',
                                            backgroundColor:
                                                el.type === 1 && '#fff' ||
                                                el.type === 2 && 'rgba(38, 211, 103, 1)' ||
                                                el.type === 3 && 'rgba(42, 42, 44, 1)' || '#fff'
                                        }}>
                                            {el.type === 1 ? <LockOutlinedIcon/> : <LockOpenOutlinedIcon/>}
                                            {
                                                el.type === 1 && 'Начать учиться' ||
                                                el.type === 2 && 'Открыть доступ' ||
                                                el.type === 3 && 'Доступ закрыт'
                                            }
                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>
                        })}
                    </Swiper>
                    {query768 && <DotsSwiper items={dots} active={currentIndex}/>}
                </div>
            </>
        </Wrapper>

    )
        ;
};

export default LkStudent;