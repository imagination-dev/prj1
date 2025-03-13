import s from './styles.module.css'
import {Avatar, useMediaQuery} from "@mui/material";
import {useEffect, useState} from "react";
import {classNames} from "../../../common/utils/classNames.ts";
import SearchIcon from '../../../common/assets/search.svg?react'

const Chats = ({
                   data,
                   withSearch = false,
                   classNameChats,
                   classNameBox,
                   setSelectedChat,
                   handleNavigate,
                   selectedChat
               }: {
    selectedChat: string,
    classNameBox?: string,
    classNameChats?: string,
    withSearch?: boolean,
    data: any,
    handleNavigate?: () => void
    setSelectedChat: (id: string) => void
}) => {
    const [value, setValue] = useState('')
    const query768 = useMediaQuery('(max-width:768px)');

    useEffect(() => {
        if (data[0].id && !query768) {
            setSelectedChat(data[0].id)
        }
    }, [data, query768])

    return (
        <div className={classNames(s.box, classNameBox)}>
            <h3 className={s.title}>Мои чаты</h3>
            {withSearch && <div className={s.search}>
                <input placeholder={'Поиск ученика...'} value={value} onChange={(e) => setValue(e.target.value)}
                       type="text"/>
                <div className={s.search_icon}>
                    <SearchIcon/>
                </div>
            </div>}
            <div className={classNames(s.chats, classNameChats)}>
                {data.map((el: any) => {
                    return <div className={classNames(s.item, selectedChat === el.id && s.selected_item)} key={el.id}
                                onClick={() => {
                                    setSelectedChat(el.id)
                                    if (query768 && handleNavigate) {
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