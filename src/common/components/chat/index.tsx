import {useEffect, useRef, useState} from 'react';
import s from './styles.module.css'
import {format} from "date-fns";
import {ru} from "date-fns/locale";
import Message from "./message";
import DateMessage from "./date";
import {v4} from "uuid";
import Action from "./action";
import moment from "moment";
import {classNames} from "../../utils/classNames.ts";


const Chat = ({
                  nameOther = 'Иван Иванов',
                  nameUser = 'Петр Петров',

                  data = [],
                  classNameWrapper,
                  classNameMainWrapper,
                  classNameActionWrapper,
                  children,
                  classNameBoxChat,
                  classNameAction
              }: any) => {
    const [messages, setMessages] = useState(data);
    const messagesEndRef = useRef<any>(null);
    const [stickElement, setStickElement] = useState<any>(null)
    const boxChatRef = useRef<any>(null);

    const [isScrolling, setIsScrolling] = useState(false);
    const scrollTimeoutRef = useRef<any>(null);
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
    }, [messages]);

    const formatDate = (timestamp: number) => {
        return format(new Date(timestamp), "d MMMM", {locale: ru});
    };

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

    const sendMessage = (message: string, callback: any) => {
        const newMessage = {
            id: v4(),
            name: nameUser,
            text: message,
            sender: 'user',
            timestamp: moment().unix() * 1000
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
                        const prevDate = index > 0 ? formatDate(messages[index - 1].timestamp) : null;
                        const currentDate = formatDate(message.timestamp);

                        if (prevDate !== currentDate) {
                            acc.push(<DateMessage key={`date-${message.id}`}
                                                  isFirst={index === 0}
                                                  isScrolling={isScrolling}
                                                  isSticky={currentDate === stickElement}
                                                  currentDate={currentDate}/>);
                        }
                        acc.push(<Message key={message.id} currentDate={currentDate} name={message.name}
                                          text={message.text}
                                          sender={message.sender}/>);

                        return acc;
                    }, [])}
                    <div ref={messagesEndRef}/>
                </div>
            </div>
            <Action sendMessage={sendMessage} classNameActionWrapper={classNameActionWrapper}
                    classNameAction={classNameAction}/>
        </div>

    );
};

export default Chat;