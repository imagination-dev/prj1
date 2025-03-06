import s from './styles.module.css'
import {Avatar} from "@mui/material";
import {classNames} from "../../../utils/classNames.ts";

interface Props {
    sender: "user" | "other"
    text: string
    name: string
    currentDate: string
}

const Message = ({sender, text, name, currentDate}: Props) => {
    return (
        <div
            data-date={currentDate}
            className={classNames(s.box, 'message')}
            style={{
                justifyContent: sender === "user" ? "flex-end" : "flex-start",
            }}
        >
            {sender === 'other' && <Avatar sx={{
                color: "#fff",
                height: "49px",
                width: '49px',
                backgroundColor: 'rgba(103, 215, 251, 1)',
                '@media screen and (max-width: 768px)': {
                    height: "35px",
                    width: '35px',
                    marginTop:'-7px'
                }
            }}>{name[0]}</Avatar>}

            <div className={s.content}>
                <p className={s.full_name}
                   style={{
                       textAlign: sender === 'user' ? 'right' : 'left'
                   }}
                >{name}</p>
                <div
                    className={classNames(s.m_text,sender === 'user' ? s.m_text_user : s.m_text_other)}
                    style={{
                        backgroundColor: sender === "user" ? "rgba(223, 247, 255, 1)" : "rgba(221, 255, 234, 1)",
                    }}
                >
                    <p className={s.text}>
                        {text}
                    </p>
                </div>
            </div>
            {sender === 'user' &&
                <Avatar sx={{
                    color: "#fff",
                    height: "49px",
                    width: '49px',
                    backgroundColor: 'rgba(251, 209, 103, 1)',
                    '@media screen and (max-width: 768px)': {
                        height: "35px",
                        width: '35px',
                        marginTop:'-7px'
                    }
                }}>{name[0]}</Avatar>}
        </div>
    );
};

export default Message;