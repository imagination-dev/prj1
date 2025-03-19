import s from './styles.module.css'
import {classNames} from "../../../common/utils/classNames.ts";
import play_icon from '../../../common/assets/play_icon.svg'
import completed_icon from '../../../common/assets/completed_icon.svg'
import lock_icon from '../../../common/assets/lock_icon.svg'
import {useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import NavigateProgram from "../../../common/components/navigateProgram";

const topic: any = {
    1: {
        id: 1,
        title: <>Тема #1: <br/> Знакомство с каллиграфией</>,
        data: [
            {title: "Урок #1: Знакомство с каллиграфией", id: 1, status: 0},
            {title: "Урок #1: Знакомство с каллиграфией", id: 2, status: 1},
            {title: "Урок #1: Знакомство с каллиграфией", id: 3, status: 2},
        ]
    },
    2: {
        id: 2,
        title: <>Тема #2: <br/> Прощание с каллиграфией</>,
        data: [
            {title: "Урок #1: Знакомство с каллиграфией", id: 1, status: 0},
            {title: "Урок #1: Знакомство с каллиграфией", id: 2, status: 1},
            {title: "Урок #1: Знакомство с каллиграфией", id: 3, status: 2},
        ]
    },
    3: {
        id: 3,
        title: <>Тема #3: <br/> Знакомство с прощанием</>,
        data: [
            {title: "Урок #1: Знакомство с каллиграфией", id: 1, status: 0},
            {title: "Урок #1: Знакомство с каллиграфией", id: 2, status: 1},
            {title: "Урок #1: Знакомство с каллиграфией", id: 3, status: 2},
        ]
    },
}
type IconType = Record<string, string>
const Navigate = () => {
    const lengthTopic = Object.keys(topic).length

    const [chooseTopic, setChooseTopic] = useState(1)
    const swiperRef = useRef<any>(null);

    const [currentIndex, setCurrentIndex] = useState<number>(0)


    const iconType: IconType = {
        0: play_icon,
        1: completed_icon,
        2: lock_icon,
    }
    return (
        <NavigateProgram currentIndex={currentIndex} swiperRef={swiperRef} lengthItems={lengthTopic}>
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
                                    return <div key={el.id} onClick={() => setChooseTopic(el.id)}
                                                className={classNames(s.topic, chooseTopic === el.id && s.active_topic)}>
                                        <img className={s.topic_icon} src={iconType[el.status]} alt=""/>
                                        <p className={s.topic_title}>{el.title}</p>
                                    </div>
                                })}
                            </div>
                        </div>
                    </SwiperSlide>
                })}
            </Swiper>
        </NavigateProgram>

    );
};

export default Navigate;