import s from "../styles.module.css";
import Progress from "../../lkStudentСourses/0-progress";
import Chat from "../../../common/components/chat";
import {messages} from "../index.tsx";
import {useEffect} from "react";
import {useMediaQuery} from "@mui/material";
import {NavLink, useNavigate} from "react-router";
import ArrowLeftIcon from '../../../common/assets/arrow_left.svg?react'

const CurrentChat = () => {
    const query768 = useMediaQuery('(max-width:768px)');
    const navigate = useNavigate()

    useEffect(() => {
        if (!query768) {
            navigate('/lk_student_chat')
        }
    }, [query768])
    return (
        <div className={s.main_right}>
            <Progress/>
            <Chat classNameActionBtns={s.classNameActionBtns} nameOther={'Рада'} nameUser={'Светланна'}
                  data={messages}
                  classNameActionWrapper={s.classNameActionWrapper} classNameAction={s.classNameAction}
                  classNameBoxChat={s.classNameBoxChat} classNameWrapper={s.classNameWrapper}/>

            <NavLink to={'/lk_student_chat'} className={s.btn}>
                <ArrowLeftIcon/>
                Все чаты
            </NavLink>
        </div>
    );
};

export default CurrentChat;