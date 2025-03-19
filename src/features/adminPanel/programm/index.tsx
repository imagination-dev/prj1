import {useRef, useState} from 'react';
import NavigateProgram from "../../../common/components/navigateProgram";
import {Swiper, SwiperSlide} from "swiper/react";
import s from "./styles.module.css";
import {v4} from "uuid";
import NormalButton from "../../../common/ui-kit/normalButton";
import ModalStar from "../../lkStudentСourses/modalStar";

const topic: any = {
    1: {
        id: 1,
        title: <>Тема #1: Введение и материалы</>,
        data: [
            {title: "Урок #1: Материалы", id: v4(), rating: null},
            {title: "Урок #2: Техника работы пером", id: v4(), rating: 4},
            {title: "Урок #3: Базовые элементы", id: v4(), rating: 2},
            {title: "Урок #3: Каллиграфические гаммы", id: v4(), rating: null},
        ]
    },
    2: {
        id: 2,
        title: <>Тема #2: Введение и материалы</>,
        data: [
            {title: "Урок #1: Материалы", id: v4(), rating: 2},
            {title: "Урок #2: Техника работы пером", id: v4(), rating: 3},
            {title: "Урок #3: Базовые элементы", id: v4(), rating: 1},
            {title: "Урок #3: Каллиграфические гаммы", id: v4(), rating: null},
        ]
    },
    3: {
        id: 3,
        title: <>Тема #3: Введение и материалы</>,
        data: [
            {title: "Урок #1: Материалы", id: v4(), rating: null},
            {title: "Урок #2: Техника работы пером", id: v4(), rating: 4},
            {title: "Урок #3: Базовые элементы", id: v4(), rating: 2},
            {title: "Урок #3: Каллиграфические гаммы", id: v4(), rating: null},
        ]
    },
}

const Program = () => {
    const lengthTopic = Object.keys(topic).length

    const [chooseTopic, setChooseTopic] = useState(null)
    const swiperRef = useRef<any>(null);

    const [currentIndex, setCurrentIndex] = useState<number>(0)

    return (
        <NavigateProgram currentIndex={currentIndex} swiperRef={swiperRef} lengthItems={lengthTopic}>
            <>
                {chooseTopic !== null && <ModalStar rating={chooseTopic} isOpen={Boolean(chooseTopic !== null)}
                                                    handleClose={() => setChooseTopic(null)}/>}
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    onSwiper={(swiper) => {
                        setCurrentIndex(swiper?.realIndex + 1)
                        swiperRef.current = swiper;
                    }}
                    onActiveIndexChange={(e) => {
                        setCurrentIndex(e?.realIndex + 1)
                    }}

                    allowTouchMove={false}
                >
                    {Object.keys(topic).map((key) => {
                        const topicItem = topic[key]

                        return <SwiperSlide key={topicItem?.id}>
                            <div className={s.box_topics}>
                                <h3 className={s.title_topic}>{topicItem.title}</h3>

                                <div className={s.topics}>
                                    {topicItem.data.map((el: any) => {
                                        return <div key={el.id}
                                                    className={s.topic}>

                                            <p className={s.topic_sub_title}>{el.title}</p>

                                            <div className={s.actions}>
                                                <NormalButton w={''} className={s.btn}
                                                              isStaticBg={el.rating === null}
                                                              onClick={() => setChooseTopic(el.rating === null ? 0 : el.rating)}
                                                              bc={'rgba(251, 209, 103, 1)'}>{el.rating ? 'Изменить' : 'Оценить'}</NormalButton>
                                                {el.rating !== null &&
                                                    <p className={s.rating}>( <span>{el.rating}</span>/5 )</p>}
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </SwiperSlide>
                    })}
                </Swiper>
            </>
        </NavigateProgram>
    );
};

export default Program;