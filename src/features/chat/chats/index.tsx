import s from './styles.module.css'
import {Avatar, useMediaQuery} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import {classNames} from "../../../common/utils/classNames.ts";
import SearchIcon from '../../../common/assets/search.svg?react'
import RefreshIcon from '../../../common/assets/refresh.svg?react'

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

    const chatsRef = useRef<HTMLDivElement | null>(null);
    const [showLoading, setShowLoading] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const chatsElement = chatsRef.current;
        if (!chatsElement || showLoading || count !== 0) return;


        const handleScroll = () => {
            const isAtBottom =
                chatsElement.scrollTop + chatsElement.clientHeight >= chatsElement.scrollHeight - 10;

            if (isAtBottom) {
                setTimeout(() => {
                    chatsElement.scrollTo({
                        top: chatsElement.scrollHeight,
                        behavior: "smooth",
                    });
                }, 50)
                setCount((prev) => prev + 1)
                setShowLoading(true);
                setTimeout(() => setShowLoading(false), 2000);
            }
        };

        if (showLoading || count !== 0) {
            chatsElement.removeEventListener("scroll", handleScroll);

        } else {
            chatsElement.addEventListener("scroll", handleScroll);
        }

        return () => chatsElement.removeEventListener("scroll", handleScroll);
    }, [showLoading, count]);

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
            <div className={classNames(s.chats, classNameChats)} ref={chatsRef}>
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
                {/*<div className={s.loading}>*/}
                {/*    <RefreshIcon/>*/}
                {/*    Загружаем еще*/}
                {/*</div>*/}
                {showLoading && <div className={s.loading}>
                    <RefreshIcon/>
                    Загружаем еще
                </div>}
            </div>
        </div>
    );
};

export default Chats;