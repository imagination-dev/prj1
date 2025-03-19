import {style} from "../../../common/styles/modal.style.ts";
import CloseModalButton from "../../../common/components/closeButtonModal";
import {Box, Modal} from "@mui/material";
import Chat from "../../../common/components/chat";
import {v4} from "uuid";
import s from './styles.module.css'
import CloseIcon from '../../../common/assets/close.svg?react';

interface Props {
    isOpen: boolean
    title?: string
    handleClose: () => void
}

const messagesData = [
    {id: v4(), name: "Петр Петров", text: "Привет!", sender: "user", timestamp: 1740787200000},
    {id: v4(), name: "Иван Иванов", text: "Как дела?", sender: "other", timestamp: 1740787200000},
    {id: v4(), name: "Иван Иванов", text: "Как дела?", sender: "other", timestamp: 1740787200000},
    {
        id: v4(), name: "Иван Иванов", text: "Пропишите разлинованный лист, придумывая свои элементы \n" +
            "или используя элементы из урока. Пропишите разлинованный лист, придумывая свои элементы \n" +
            "или используя элементы из урока.", sender: "other", timestamp: 1740787200000
    },
    {id: v4(), name: "Иван Иванов", text: "Как дела?", sender: "other", timestamp: 1740787200000},
    {
        id: v4(), name: "Петр Петров", text: "Пропишите разлинованный лист, придумывая свои элементы \n" +
            "или используя элементы из урока. Пропишите разлинованный лист, придумывая свои элементы \n" +
            "или используя элементы из урока.", sender: "user", timestamp: 1740787200000
    },
    {id: v4(), name: "Петр Петров", text: "Все отлично!", sender: "user", timestamp: 1740787200000},
    {id: v4(), name: "Иван Иванов", text: "А у тебя?", sender: "other", timestamp: 1740787200000},
    {id: v4(), name: "Петр Петров", text: "Тоже хорошо!", sender: "user", timestamp: 1740873600000},
    {id: v4(), name: "Иван Иванов", text: "Что нового?", sender: "other", timestamp: 1740873600000},
    {id: v4(), name: "Петр Петров", text: "Работаю над проектом", sender: "user", timestamp: 1740873600000},
    {id: v4(), name: "Иван Иванов", text: "Круто!", sender: "other", timestamp: 1740873600000},
    {id: v4(), name: "Петр Петров", text: "Спасибо!", sender: "user", timestamp: 1740873600000},
    {id: v4(), name: "Иван Иванов", text: "Поговорим позже?", sender: "other", timestamp: 1740873600000},
    {id: v4(), name: "Петр Петров", text: "Конечно!", sender: "user", timestamp: 1740873600000},
    {id: v4(), name: "Иван Иванов", text: "Удачи!", sender: "other", timestamp: 1740873600000},
    {id: v4(), name: "Петр Петров", text: "Спасибо, и тебе!", sender: "user", timestamp: 1740873600000},
    {id: v4(), name: "Петр Петров", text: "Спасибо, и тебе!", sender: "user", timestamp: 1740873600000},
    {id: v4(), name: "Иван Иванов", text: "До встречи!", sender: "other", timestamp: 1740873600000,},
];

const ModalChat = ({isOpen, handleClose, title = 'Задайте свой вопрос'}: Props) => {
    return (
        <Modal
            open={isOpen}
            sx={{

                '& .MuiBackdrop-root': {
                    backgroundColor: 'rgba(217, 217, 217, 0.9)'
                },


            }}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >


            <Box sx={{
                ...style({width: 1140}),
                background: "rgba(251, 252, 255, 1)",
                maxHeight: '690px',
                '@media screen and (max-width: 768px)': {
                    width: '100vw',
                    minHeight: '100dvh',
                    maxHeight: '100dvh',
                    height: '100dvh',
                    padding: '20px 10px 10px 10px',
                    borderRadius: '0px',
                    overflow: 'hidden'
                }

            }}>
                <CloseModalButton handleClose={handleClose}/>
                <Chat classNameMainWrapper={s.classNameMainWrapper} classNameWrapper={s.classNameWrapper}
                      classNameActionWrapper={s.classNameActionWrapper}
                      data={messagesData}>
                    <div className={s.header_modal}>
                        <h3 className={s.title}>{title}</h3>
                        <div className={s.close} onClick={handleClose}>
                            <CloseIcon/>
                        </div>
                    </div>
                </Chat>
            </Box>

        </Modal>
    );
};

export default ModalChat;