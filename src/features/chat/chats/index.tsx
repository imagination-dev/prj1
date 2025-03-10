import s from './styles.module.css'
import {Avatar, useMediaQuery} from "@mui/material";
import { useState} from "react";
import {classNames} from "../../../common/utils/classNames.ts";
import {useNavigate} from "react-router";

const mock = [
    {
        id: 1,
        date: '11 мар',
        title: "Леттеринг. Полный доступ",
        last_message: "Пропишите разлинованный лист, придумывая свои элементы"
    },
    {
        id: 2,
        date: '12 мар',
        title: "Патеринг. Полный доступ",
        last_message: "Пропишите разлинованный лист, придумывая свои элементы"
    },
]
const Chats = () => {
    const query768 = useMediaQuery('(max-width:768px)');
    const navigate = useNavigate()
    const [selectedChat, setSelectedChat] = useState(1)
    const handleNavigate = () => {
        navigate('/lk_student_current_chat')
    }

    return (
        <div className={s.box}>
            <h3 className={s.title}>Мои чаты</h3>

            <div className={s.chats}>
                {mock.map((el: any) => {
                    return <div className={classNames(s.item, selectedChat === el.id && s.selected_item)} key={el.id}
                                onClick={() => {
                                    setSelectedChat(el.id)
                                    if (query768) {
                                        handleNavigate()
                                    }

                                }}>
                        <div className={s.item_left}>
                            <Avatar sx={{height: '41px', width: '41px', backgroundColor: "rgba(172, 172, 172, 1)"}}/>
                            <div className={s.item_description}>
                                <p className={s.chat_name}>{el.title}</p>
                                <p className={s.last_message}>{el.last_message}</p>
                            </div>
                        </div>
                        <p className={s.date}>{el.date}</p>
                    </div>
                })}
            </div>
        </div>
    );
};

export default Chats;