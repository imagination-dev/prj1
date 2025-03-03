import img_1 from '../../common/assets/lkStudent/img_1.png'
import img_2 from '../../common/assets/lkStudent/img_2.png'
import img_3 from '../../common/assets/lkStudent/img_3.png'
import img_4 from '../../common/assets/lkStudent/img_4.png'
import s from './styles.module.css'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Wrapper from "../../common/components/wrapper";
import {Swiper, SwiperSlide} from "swiper/react";
// @ts-ignore
import 'swiper/css';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import {useRef, useState} from "react";


const swiperData = [
    {title: <>Каллиграфия <br/> пробный доступ</>, type: 1, img: img_1},
    {title: <>Каллиграфия <br/> полный доступ</>, type: 2, img: img_2},
    {title: <>леттеринг <br/> полный доступ</>, type: 3, img: img_3},
    {title: <>Sketching <br/> акварелью</>, type: 3, img: img_4},
    {title: <>Каллиграфия <br/> полный доступ</>, type: 2, img: img_2},
    {title: <>Каллиграфия <br/> пробный доступ</>, type: 1, img: img_1},
    {title: <>леттеринг <br/> полный доступ</>, type: 3, img: img_3},
]

const LkStudent = () => {
    const swiperRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0)
    const [hiddenLastIndex, setHiddenLastIndex] = useState(null)
    const bg = {
        1: "linear-gradient(180deg, #FF3C3C 0%, #F39292 49.48%, #FFD9D9 100%)",
        2: "linear-gradient(180deg, #F3ACD7 0%, #FFC7F6 48.44%, #FBE2FF 100%)",
        3: "linear-gradient(180deg, #75DFB9 0%, #BEFDEE 42.71%, #E1FFFA 100%)",
    }
    const dots = Array.from({length: swiperData.length}, (_, b) => b)

    const handleSlideChange = (swiper: any) => {
        const visibleSlides = [];
        const slidesPerView = swiper.params.slidesPerView;

        for (let i = 0; i < slidesPerView; i++) {
            const slideIndex = swiper.activeIndex + i;
            if (slideIndex < swiper.slides.length) {
                visibleSlides.push(slideIndex);
            }
        }
        setHiddenLastIndex(swiper.isEnd ? visibleSlides[0] - 1 : visibleSlides[visibleSlides.length - 1])

    };
    return (
        <Wrapper className={s.wrapper_LkStudent}>
            <>
                <h2 className={s.main_title}>Программы обучения</h2>
                <div className={s.swiper_box}>
                    <div className={s.navigate}>
                        <div className={s.arrow} onClick={() => {
                            //@ts-ignore
                            swiperRef?.current?.slidePrev()
                        }}><ArrowLeftOutlinedIcon
                            style={{height: '32px', width: 'auto'}}/></div>
                        <div className={s.arrow} onClick={() => {
                            //@ts-ignore
                            swiperRef.current?.slideNext()
                        }}><ArrowRightOutlinedIcon
                            style={{height: '32px', width: 'auto'}}/></div>
                    </div>
                    <Swiper
                        onSlideChange={handleSlideChange}
                        onSwiper={(swiper) => {
                            handleSlideChange(swiper)
                            //@ts-ignore
                            swiperRef.current = swiper;
                        }}
                        onActiveIndexChange={(e) => {
                            setCurrentIndex(e?.activeIndex)
                        }}

                        spaceBetween={30}
                        slidesPerView={4.5}
                        speed={1500}
                        breakpoints={{
                            1200: {slidesPerView: 4.5},
                            1024: {slidesPerView: 3.5},
                            768: {slidesPerView: 2.5},
                            480: {slidesPerView: 1.5},
                            0: {slidesPerView: 1.2},
                        }}
                        // autoplay={{
                        //     delay: 2000,
                        //     pauseOnMouseEnter: true,
                        //     disableOnInteraction: false,
                        // }}
                        // modules={[Autoplay]}
                    >
                        {swiperData.map((el, i) => {
                            return <SwiperSlide key={i}
                            >
                                <div className={s.item} style={{
                                    //@ts-ignore
                                    background: bg[el.type],
                                    opacity: hiddenLastIndex === i ? 0.35 : 1
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
                    <div className={s.mobile_dots}>
                        {dots.map((el) => <div key={el} style={{
                            backgroundColor: currentIndex === el ? 'rgba(42, 42, 44, 1)' : 'rgba(42, 42, 44, 0.3)'
                        }} className={s.dot}/>)}
                    </div>
                </div>
            </>
        </Wrapper>

    )
        ;
};

export default LkStudent;