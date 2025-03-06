import s from './styles.module.css'
import Wrapper from "../../common/components/wrapper";
import TitleSupport from "../../common/ui-kit/titleSupport";
import avatar_1 from '../../common/assets/reviews/avatar_1.png'
import avatar_2 from '../../common/assets/reviews/avatar_2.png'
import avatar_3 from '../../common/assets/reviews/avatar_3.png'
import avatar_4 from '../../common/assets/reviews/avatar_4.png'
import avatar_5 from '../../common/assets/reviews/avatar_5.png'

import bg_1 from '../../common/assets/reviews/bg_1.png'
import bg_2 from '../../common/assets/reviews/bg_2.png'
import bg_3 from '../../common/assets/reviews/bg_3.png'
import bg_4 from '../../common/assets/reviews/bg_4.png'
import bg_5 from '../../common/assets/reviews/bg_5.png'
import {Swiper, SwiperSlide} from "swiper/react";
import {Avatar, useMediaQuery} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import DotsSwiper from "../../common/components/dotsSwipper";
import ArrowSwiper from "../../common/components/arrowSwipper";
import {classNames} from "../../common/utils/classNames.ts";

const data = [
    {
        name: "Татьяна Данич", age: "43 года", text: <div className={s.text}>
            <p>Я работаю учителем начальных классов в школе, где ученики пишут пером. Поэтому методикой классического
                написания букв и элементов я владею уже несколько лет. Однако, давно хотела научиться писать красивым
                шрифтом с росчерками.</p>
            <p>И вот, моя мечта сбылась! Я прохожу обучение на курсе! Несмотря на то, что некоторые умения и навыки у
                меня есть, все же случаются ошибки и неточности, но я верю: у меня все получится! Хвастаюсь своими
                достижениями перед учениками, они стали аккуратнее выполнять свои работы. </p>
            <p>Спасибо организаторам курса и, особенно, преподавателям, которые ведут нас в волшебный мир
                каллиграфии!</p>
        </div>,
        avatar: avatar_1, bg: bg_1
    },
    {
        name: "Нина Таджиева", age: "43 года", text: <div className={s.text}>
            <p>Закончила курс "Основы каллиграфии". Получила колоссальное удовольствие! Спасибо преподавателю за очень
                четкое и доступное объяснение всего материала, за обратную связь и поддержку. </p>
            <p>Благодаря вам, влюбилась в это дело окончательно и бесповоротно! Если вы еще сомневаетесь, нужно вам это
                или нет, обязательно решайтесь и не пожалеете! </p>
            <p>Спасибо вам что стали моей отправной точкой в большой и интересный мир каллиграфии</p>
        </div>,
        avatar: avatar_2, bg: bg_2
    },
    {
        name: "Елена Русева", age: "43 года", text: <div className={s.text}>
            <p>Что тут скажешь, курс действительно замечательный! Удивительно, сколько в каждом уроке, в каждом
                мгновении, любви к предмету. </p>
            <p>Огромное спасибо преподавателю! Вы показали, что каллиграфия - это целый пласт культуры, имеющий связь с
                историей (разные шрифты в рукописных источниках), с живописью (контрформы, композиция) и даже с музыкой
                (развивает чувство прекрасного, строится на гармонии). </p>
            <p>Спасибо Вам за знания и полученные уроки!</p>
        </div>,
        avatar: avatar_3, bg: bg_3
    },
    {
        name: "Юлия Черникова", age: "43 года", text: <div className={s.text}>
            <p>Это мой первый онлайн курс в принципе. Долго сомневалась, ибо опыта не было в таких мероприятиях. Но
                осталась очень довольна курсом. Сама я новичок в каллиграфии, но уже делаю успехи. </p>
            <p>Видео ценные. много информации дается, которую не нужно самим на своей шкуре проверять. Преподаватель
                терпеливый, отвечает на все вопросы и помогает в разных ситуациях.</p>
            <p>Теперь выбираю следующий курс в школе Imagination!</p>
        </div>,
        avatar: avatar_4, bg: bg_4
    },
    {
        name: "Раиса Майстренко", age: "43 года", text: <div className={s.text}>
            <p>Загорелась научиться каллиграфии, увидев как знакомая делает красивые альбомы ручной работы, но в них не
                хватало красивых рукописных надписей, и мне очень захотелось постичь данный вид искусства.</p>
            <p>И ни разу не пожалела, что выбрала именно этот курс, доступная подача материала, подбадривающий куратор,
                который проверяет домашку, да и вообще все очень понравилось!</p>
            <p>Если хотите изменить свой почерк, научиться красиво подписывать открытки, самим создавать открытки или
                просто делать красивые памятные подарки, то этот курс именно для вас!</p>
        </div>,
        avatar: avatar_5, bg: bg_5
    },
]
const Reviews = () => {
    const query768 = useMediaQuery('(max-width:768px)');
    const query1200 = useMediaQuery('(max-width:1200px)');

    const swiperRef = useRef<any>(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [pointArrow, setPointArrow] = useState(0)
    const dots = Array.from({length: data.length}, (_, b) => b)


    useEffect(() => {
        const handleResize = () => {
            setPointArrow((swiperRef.current.slidesSizesGrid[0] / 4) - 20 - 17)
        }
        if (swiperRef.current) {
            handleResize()
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);
    return (
        <Wrapper className={s.wrapper}>
            <div className={s.box}>
                <TitleSupport title={'Отзывы учеников'}/>

                {query768 && <div className={s.action}>
                    <div className={s.arrow_box}>
                        <ArrowSwiper type={'left'} onClick={() => {
                            //@ts-ignore
                            swiperRef?.current?.slidePrev()
                        }}/>
                        <ArrowSwiper type={'right'} onClick={() => {
                            //@ts-ignore
                            swiperRef?.current?.slideNext()
                        }}/>
                    </div>
                    <DotsSwiper items={dots} active={currentIndex}/>


                </div>}
                <div className={classNames(s.swipper)}
                    //@ts-ignore
                     style={{"--point-width": `${pointArrow}px`}}
                >

                    <div className={s.arrow} style={{
                        left: `${pointArrow}px`
                    }}>
                        <ArrowSwiper type={'left'} onClick={() => {
                            //@ts-ignore
                            swiperRef?.current?.slidePrev()
                        }}/>
                    </div>
                    <div className={s.arrow} style={{
                        right: `${pointArrow}px`
                    }}>
                        <ArrowSwiper type={'right'} onClick={() => {
                            //@ts-ignore
                            swiperRef?.current?.slideNext()
                        }}/>
                    </div>
                    <Swiper
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        onActiveIndexChange={(e) => {

                            setCurrentIndex(e?.realIndex)
                        }}
                        style={{
                            alignItems: 'stretch !important',
                        }}
                        autoHeight={false}

                        centeredSlides={true}
                        spaceBetween={query768 ? 20 : 70}
                        slidesPerView={query768 ? 1.18 : 1.5}
                        loop
                    >

                        {data.map((el, i) => {
                            return <SwiperSlide

                                key={`${i} + ${el.name}`}
                            >
                                <div className={s.item}>
                                    <div className={s.item_left}>
                                        <div className={s.avatar}>
                                            <Avatar src={el.avatar} sx={{height: '45px', width: '45px'}}/>
                                            {query1200 && <p className={s.name_age}>
                                                <span className={s.name}>{el.name}</span>
                                                <span className={s.line}>|</span>
                                                <span className={s.age}>{el.age}</span>
                                            </p>}
                                        </div>
                                        <div className={s.item_left_right}>
                                            {!query1200 && <p className={s.name_age}>
                                                <span>{el.name}</span>
                                                <span className={s.line}>|</span>
                                                <span>{el.age}</span>
                                            </p>}

                                            {el.text}
                                        </div>
                                    </div>
                                    <div className={s.item_right}>
                                        <Avatar src={el.bg}
                                                sx={{borderRadius: "10px", width: '100%', height: '273px'}}/>
                                    </div>
                                </div>
                            </SwiperSlide>
                        })}
                    </Swiper>
                </div>
                {!query768 && <DotsSwiper items={dots} active={currentIndex}/>}
            </div>
        </Wrapper>
    );
};

export default Reviews;