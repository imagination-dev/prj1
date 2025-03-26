import {useEffect, useRef, useState} from 'react';
import s from './styles.module.css'
// import {format} from "date-fns";
// import {ru} from "date-fns/locale";
import Message from "./message";
import DateMessage from "./date";
import {v4} from "uuid";
import Action from "./action";
import moment from "moment";
import {classNames} from "../../utils/classNames.ts";


const Chat = ({
                  nameOther = 'Иван Иванов',
                  nameUser = 'Петр Петров',
                  classNameActionBtns,
                  data = [],
                  classNameWrapper,
                  classNameMainWrapper,
                  classNameActionWrapper,
                  children,
                  classNameBoxChat,
                  classNameAction
              }: any) => {
    const [messages, setMessages] = useState(data);
    const [stickElement, setStickElement] = useState<any>(null)
    const boxChatRef = useRef<any>(null);

    const [isScrolling, setIsScrolling] = useState(false);
    const scrollTimeoutRef = useRef<any>(null);

    const handleScrollToBottom = () => {
        if (boxChatRef.current) {
            boxChatRef.current.scrollTo({
                top: boxChatRef.current.scrollHeight,
                behavior: "smooth"
            });
        }
    }

    useEffect(() => {
        setTimeout(() => {
            handleScrollToBottom()
        }, 100)

    }, [messages]);

    // const formatDate = (timestamp: number) => {
    //     return format(new Date(timestamp), "d MMMM", {locale: ru});
    // };

    function formatDateMessage(timestamp: number) {
        const inputDate = new Date(timestamp); // Преобразуем timestamp в объект Date
        const today = new Date(); // Текущая дата
        const currentYear = today.getFullYear(); // Текущий год

        // Проверяем, совпадает ли дата с сегодняшним днем
        if (
            inputDate.getDate() === today.getDate() &&
            inputDate.getMonth() === today.getMonth() &&
            inputDate.getFullYear() === today.getFullYear()
        ) {
            return "Сегодня";
        }

        // Проверяем, совпадает ли год с текущим
        if (inputDate.getFullYear() === currentYear) {
            // Форматируем дату в формате "17 марта"
            const monthNames = [
                "января", "февраля", "марта", "апреля", "мая", "июня",
                "июля", "августа", "сентября", "октября", "ноября", "декабря"
            ];
            const day = inputDate.getDate();
            const month = monthNames[inputDate.getMonth()];
            return `${day} ${month}`;
        }

        // Если год не совпадает, возвращаем дату в формате "17 марта 2023"
        const monthNames = [
            "января", "февраля", "марта", "апреля", "мая", "июня",
            "июля", "августа", "сентября", "октября", "ноября", "декабря"
        ];
        const day = inputDate.getDate();
        const month = monthNames[inputDate.getMonth()];
        const year = inputDate.getFullYear();
        return `${day} ${month} ${year}`;
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const attr = entry.target.getAttribute('data-date')
                        if (attr) {
                            setStickElement(attr);
                        }
                    }
                });
            },
            {
                root: boxChatRef.current,
                rootMargin: "0px",
                threshold: 0.5,
            }
        );

        if (boxChatRef.current) {
            const children = boxChatRef.current.children;
            for (let i = 0; i < children.length; i++) {
                observer.observe(children[i]);
            }
        }

        return () => {
            observer.disconnect();
        };
    }, [messages]);

    const sendMessage = (message: string, callback: any, media = null) => {
        const newMessage = {
            id: v4(),
            name: nameUser,
            text: message,
            sender: 'user',
            timestamp: moment().unix() * 1000,
            media: media
        }
        setMessages((prev: any) => [...prev, newMessage])
        callback()

        setTimeout(() => {
            const newMessage = {
                id: v4(),
                name: nameOther,
                text: 'Я отвечаю типичным текстом',
                sender: 'other',
                timestamp: moment().unix() * 1000
            }
            setMessages((prev: any) => [...prev, newMessage])
        }, 1000)
    }

    const handleScroll = () => {
        setIsScrolling(true);

        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }

        scrollTimeoutRef.current = setTimeout(() => {
            setIsScrolling(false);
        }, 1000);
    };

    useEffect(() => {
        const chatBox = boxChatRef.current;
        if (chatBox) {
            chatBox.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (chatBox) {
                chatBox.removeEventListener('scroll', handleScroll);
            }
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, []);

    return (
        <div className={classNames(classNameMainWrapper)}>
            {children && children}
            <div
                className={classNames(s.wrapper, classNameWrapper)}
            >
                <div
                    className={classNames(s.box_chat, classNameBoxChat)}
                    ref={boxChatRef}
                >
                    {messages.reduce((acc: any, message: any, index: number) => {
                        const prevDate = index > 0 ? formatDateMessage(messages[index - 1].timestamp) : null;
                        const currentDate = formatDateMessage(message.timestamp);
                        const handleGetAvatarSrc = () => {
                            if (message?.media?.length) {
                                const file: any = message?.media[0]; // Берем только один файл
                                if (file && (file.type.startsWith("image/") || file.type === "application/pdf" || file.type === "application/msword" || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document")) {


                                    if (file.type.startsWith("image/")) {
                                        const objectURL: string = URL.createObjectURL(file);

                                        return objectURL;
                                    } else {
                                        const objectURL: string = URL.createObjectURL(file);
                                        return {
                                            url: objectURL,
                                            name: file.name,
                                            type: file.type.split('/').length !== 0 ? file.type.split('/')[1] : 'Файл не распознан'
                                        }
                                    }
                                }
                            }
                        }

                        const avatarSrc = handleGetAvatarSrc()

                        if (prevDate !== currentDate) {
                            acc.push(<DateMessage key={`date-${message.id}`}
                                                  isFirst={index === 0}
                                                  isScrolling={isScrolling}
                                                  isSticky={currentDate === stickElement}
                                                  currentDate={currentDate}/>);
                        }
                        acc.push(<Message key={message.id} currentDate={currentDate} name={message.name}
                                          text={message.text}
                                          avatarSrc={avatarSrc}
                                          sender={message.sender}/>);

                        return acc;
                    }, [])}
                </div>
            </div>
            <Action sendMessage={sendMessage} classNameActionBtns={classNameActionBtns}
                    classNameActionWrapper={classNameActionWrapper}
                    classNameAction={classNameAction}/>
        </div>

    );
};

export default Chat;