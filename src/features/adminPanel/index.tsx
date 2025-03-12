import Wrapper from "../../common/components/wrapper";
import s from './styles.module.css'
import {classNames} from "../../common/utils/classNames.ts";
import CalligraphyTrial from "./calligraphyTrial";
import {useState} from "react";
import ChatSort from "./chatSort";
import Progress from "../lkStudentСourses/0-progress";
import Chat from "../../common/components/chat";
import {messages} from "../chat";
import Program from "./programm";
import Chats from "../chat/chats";
import {v4} from "uuid";

const mock = [
    {
        id: v4(),
        date: '11 мар',
        title: "+79066709222",
        last_message: "Пропишите раз инованный лист, придумывая свои элементы"
    },
    {
        id: v4(),
        date: '12 мар',
        title: "Патеринг. Полный доступ",
        last_message: "Пропишите два линованный лист, придумывая свои элементы"
    },
    {
        id: v4(),
        date: '11 мар',
        title: "+79066709222",
        last_message: "Пропишите три линованный лист, придумывая свои элементы"
    },
    {
        id: v4(),
        date: '12 мар',
        title: "Патеринг. Полный доступ",
        last_message: "Пропишите разлинованный лист, придумывая свои элементы"
    },
    {
        id: v4(),
        date: '11 мар',
        title: "+79066709222",
        last_message: "Пропишите разлинованный лист, придумывая свои элементы"
    },
    {
        id: v4(),
        date: '12 мар',
        title: "Патеринг. Полный доступ",
        last_message: "Пропишите разлинованный лист, придумывая свои элементы"
    },
    {
        id: v4(),
        date: '11 мар',
        title: "+79066709222",
        last_message: "Пропишите разлинованный лист, придумывая свои элементы"
    },
    {
        id: v4(),
        date: '12 мар',
        title: "Патеринг. Полный доступ",
        last_message: "Пропишите разлинованный лист, придумывая свои элементы"
    },
    {
        id: v4(),
        date: '11 мар',
        title: "+79066709222",
        last_message: "Пропишите разлинованный лист, придумывая свои элементы"
    },
    {
        id: v4(),
        date: '12 мар',
        title: "Патеринг. Полный доступ",
        last_message: "Пропишите разлинованный лист, придумывая свои элементы"
    },
    {
        id: v4(),
        date: '11 мар',
        title: "+79066709222",
        last_message: "Пропишите разлинованный лист, придумывая свои элементы"
    },
    {
        id: v4(),
        date: '12 мар',
        title: "Патеринг. Полный доступ",
        last_message: "Пропишите разлинованный лист, придумывая свои элементы"
    },
]

const AdminPanel = () => {
    const [trial, setTrial] = useState<null | string>(null)
    const [chatSort, setChatSort] = useState<null | string>(null)
    const [selectedChat, setSelectedChat] = useState('')

    return (
        <Wrapper className={s.wrapper}>
            <div className={s.box}>
                <div className={classNames(s.sub_box, s.sub_box_width)}>
                    <CalligraphyTrial value={trial} handleChange={(value: string) => setTrial(value)}/>
                    <Program/>
                </div>
                <div className={classNames(s.sub_box, s.sub_box_width)}>
                    <ChatSort value={chatSort} handleChange={(value: string) => setChatSort(value)}/>
                    <Chats withSearch={true} classNameChats={s.classNameChats} classNameBox={s.chats} setSelectedChat={setSelectedChat} selectedChat={selectedChat}
                           data={mock}/>
                </div>
                <div className={s.sub_box}>
                    <Progress/>
                    <Chat classNameActionBtns={s.classNameActionBtns} nameOther={'Рада'} nameUser={'Светланна'}
                          data={messages}
                          classNameActionWrapper={s.classNameActionWrapper} classNameAction={s.classNameAction}
                          classNameBoxChat={s.classNameBoxChat} classNameWrapper={s.classNameWrapper}/>
                </div>
            </div>
        </Wrapper>
    );
};

export default AdminPanel;