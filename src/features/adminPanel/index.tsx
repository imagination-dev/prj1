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
import {useSearchParams} from "react-router";
import {useMediaQuery} from "@mui/material";
import ArrowLeftIcon from '../../common/assets/arrow_left.svg?react'

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
    const query768 = useMediaQuery('(max-width:768px)');

    const [search, setSearch] = useSearchParams()
    const [trial, setTrial] = useState<null | string>(null)
    const [chatSort, setChatSort] = useState<null | string>(null)
    const [selectedChat, setSelectedChat] = useState('')

    const idChat = search.get('chatID')

    const handleSaveIdChat = (id: string) => {
        search.set('chatID', id)
        setSearch(search)

        if (query768) {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
    }

    const handleBackAllChats = () => {
        search.delete('chatID')
        setSearch(search)
        setSelectedChat('')

        if (query768) {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
    }


    return (
        <Wrapper className={s.wrapper}>
            {!query768 ? <div className={s.box}>
                    <div className={classNames(s.sub_box, s.sub_box_width)}>
                        <CalligraphyTrial value={trial} handleChange={(value: string) => setTrial(value)}/>
                        <Program/>
                    </div>
                    <div className={classNames(s.sub_box, s.sub_box_width)}>
                        <ChatSort value={chatSort} handleChange={(value: string) => setChatSort(value)}/>
                        <Chats withSearch={true} classNameChats={s.classNameChats} classNameBox={s.chats}
                               setSelectedChat={(id: string) => {
                                   setSelectedChat(id)
                                   handleSaveIdChat(id)
                               }}
                               selectedChat={selectedChat}
                               data={mock}/>
                    </div>
                    <div className={s.sub_box}>
                        <Progress/>
                        <Chat classNameActionBtns={s.classNameActionBtns} nameOther={'Рада'} nameUser={'Светланна'}
                              data={messages}
                              classNameActionWrapper={s.classNameActionWrapper} classNameAction={s.classNameAction}
                              classNameBoxChat={s.classNameBoxChat} classNameWrapper={s.classNameWrapper}/>
                    </div>
                </div> :
                <div className={s.box}>
                    {!idChat && <div className={classNames(s.sub_box, s.sub_box_width)}>
                        <CalligraphyTrial value={trial} handleChange={(value: string) => setTrial(value)}/>
                        <ChatSort value={chatSort} handleChange={(value: string) => setChatSort(value)}/>
                        <Chats withSearch={true} classNameChats={s.classNameChats} classNameBox={s.chats}
                               setSelectedChat={(id: string) => {
                                   setSelectedChat(id)
                                   handleSaveIdChat(id)
                               }}
                               selectedChat={selectedChat}
                               data={mock}/>

                    </div>}
                    {idChat && <div className={classNames(s.sub_box, s.sub_box_width)}>
                        <Progress/>
                        <Chat classNameActionBtns={s.classNameActionBtns} nameOther={'Рада'} nameUser={'Светланна'}
                              data={messages}
                              classNameActionWrapper={s.classNameActionWrapper} classNameAction={s.classNameAction}
                              classNameBoxChat={s.classNameBoxChat} classNameWrapper={s.classNameWrapper}/>
                        <div className={s.all_chats} onClick={handleBackAllChats}>
                            <ArrowLeftIcon/>
                            Все чаты
                        </div>
                        <Program/>

                    </div>}
                </div>
            }
        </Wrapper>
    );
};

export default AdminPanel;