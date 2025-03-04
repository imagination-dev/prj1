import img_1 from '../../common/assets/lkStudent/img_1.png'
import img_2 from '../../common/assets/lkStudent/img_2.png'
import img_3 from '../../common/assets/lkStudent/img_3.png'
import img_4 from '../../common/assets/lkStudent/img_4.png'
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
    {title: <>Каллиграфия <br/> полный доступ</>, type: 2, img: img_2, id: 5},
    {title: <>Каллиграфия <br/> пробный доступ</>, type: 1, img: img_1, id: 6},
    {title: <>леттеринг <br/> полный доступ</>, type: 3, img: img_3, id: 7},
]

const LkStudent = () => {
    const query768 = useMediaQuery('(max-width:768px)');
    const swiperRef = useRef<unknown>(null);
    const [currentIndex, setCurrentIndex] = useState(0)

    const [leftItem, setLeftItem] = useState<ISwiperItem | null>(null)
    const [rightItem, setRightItem] = useState<ISwiperItem | null>(null)

    const bg = {
        1: "linear-gradient(180deg, #FF3C3C 0%, #F39292 49.48%, #FFD9D9 100%)",
        2: "linear-gradient(180deg, #F3ACD7 0%, #FFC7F6 48.44%, #FBE2FF 100%)",
        3: "linear-gradient(180deg, #75DFB9 0%, #BEFDEE 42.71%, #E1FFFA 100%)",
    }
    const dots = Array.from({length: swiperData.length}, (_, b) => b)

    const handleSlideChange = (realIndex: number, bp: string) => {
        const bpNumber = Number(bp)

        const rightIndex =
            realIndex + 2 > swiperData.length - 1
                ? (realIndex + 2) - swiperData.length
                : realIndex + 2;
        const leftIndex =
            realIndex - 2 < 0
                ? swiperData.length + (realIndex - 2)
                : realIndex - 2;


        const rightIndexMobile =
            realIndex + 1 > swiperData.length - 1
                ? (realIndex + 1) - swiperData.length
                : realIndex + 1;

        const leftIndexMobile =
            realIndex - 1 < 0
                ? swiperData.length + (realIndex - 1)
                : realIndex - 1;

        setLeftItem(swiperData[bpNumber > 768 ? leftIndex : leftIndexMobile])
        setRightItem(swiperData[bpNumber > 768 ? rightIndex : rightIndexMobile]);

    };


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
                        allowTouchMove={query768}
                        onSlideChange={(swiper) => {
                            handleSlideChange(swiper?.realIndex, swiper?.currentBreakpoint)
                        }}
                        onSwiper={(swiper) => {
                            handleSlideChange(swiper?.realIndex, swiper?.currentBreakpoint)
                            swiperRef.current = swiper;
                        }}
                        onActiveIndexChange={(e) => {
                            handleSlideChange(e?.realIndex, e?.currentBreakpoint)
                            setCurrentIndex(e?.realIndex)
                        }}
                        centeredSlides={true}
                        spaceBetween={30}
                        slidesPerView={4.3}
                        // speed={1500}
                        breakpoints={{
                            1200: {slidesPerView: 4.5},
                            1024: {slidesPerView: 3.5},
                            768: {slidesPerView: 2.5},
                            480: {slidesPerView: 1.5},
                            0: {slidesPerView: 1.35},
                        }}
                        loop
                    >
                        {swiperData.map((el, i) => {
                            return <SwiperSlide key={`${i} + ${el.id}`}
                            >
                                <div className={s.item} style={{
                                    //@ts-ignore
                                    background: bg[el.type],
                                    transition: "0.4s all",
                                    opacity: (leftItem?.id === el.id || rightItem?.id === el.id) ? 0.35 : 1
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
                                    <img className={s.img} src={el.img} alt="img"/>
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