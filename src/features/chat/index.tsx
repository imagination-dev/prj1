import s from './styles.module.css'
import Wrapper from "../../common/components/wrapper";
import Chats from "./chats";
import Progress from "../lkStudentСourses/0-progress";
import Chat from "../../common/components/chat";
import {v4} from "uuid";
import {useMediaQuery} from "@mui/material";
import {useNavigate} from "react-router";
import {useState} from "react";

export const messages = [
    {id: v4(), name: "Светланна", text: "Все отлично!", sender: "user", timestamp: 1740787200000},
    {id: v4(), name: "Рада", text: "А у тебя?", sender: "other", timestamp: 1740787200000},
    {id: v4(), name: "Светланна", text: "Тоже хорошо!", sender: "user", timestamp: 1740873600000},
    {id: v4(), name: "Рада", text: "Что нового?", sender: "other", timestamp: 1740873600000},
    {id: v4(), name: "Светланна", text: "Работаю над проектом", sender: "user", timestamp: 1740873600000},
    {id: v4(), name: "Рада", text: "Круто!", sender: "other", timestamp: 1740873600000},
    {id: v4(), name: "Светланна", text: "Спасибо!", sender: "user", timestamp: 1740873600000},
    {id: v4(), name: "Рада", text: "Поговорим позже?", sender: "other", timestamp: 1740873600000},
    {id: v4(), name: "Светланна", text: "Конечно!", sender: "user", timestamp: 1740873600000},
    {id: v4(), name: "Рада", text: "Удачи!", sender: "other", timestamp: 1740873600000},
    {id: v4(), name: "Светланна", text: "Спасибо, и тебе!", sender: "user", timestamp: 1740873600000},
    {id: v4(), name: "Светланна", text: "Спасибо, и тебе!", sender: "user", timestamp: 1740873600000},
    {id: v4(), name: "Рада", text: "До встречи!", sender: "other", timestamp: 1740873600000},
];

const mock = [
    {
        id: v4(),
        date: '11 мар',
        title: "Леттеринг. Полный доступ",
        last_message: "Пропишите разлинованный лист, придумывая свои элементы"
    },
    {
        id: v4(),
        date: '12 мар',
        title: "Патеринг. Полный доступ",
        last_message: "Пропишите разлинованный лист, придумывая свои элементы"
    },
]

const LkStudentChat = () => {
    const query768 = useMediaQuery('(max-width:768px)');
    const navigate = useNavigate()

    const [selectedChat, setSelectedChat] = useState('')

    const handleNavigate = () => {
        navigate('/lk_student_current_chat')
    }
    return (
        <Wrapper className={s.wrapper}>
            <div className={s.main}>
                <Chats setSelectedChat={setSelectedChat} selectedChat={selectedChat} data={mock}
                       handleNavigate={handleNavigate}/>
                {!query768 && <div className={s.main_right}>
                    <Progress/>
                    <Chat classNameActionBtns={s.classNameActionBtns} nameOther={'Рада'} nameUser={'Светланна'}
                          data={messages}
                          classNameActionWrapper={s.classNameActionWrapper} classNameAction={s.classNameAction}
                          classNameBoxChat={s.classNameBoxChat} classNameWrapper={s.classNameWrapper}/>
                </div>}
            </div>
        </Wrapper>
    );
};

export default LkStudentChat;