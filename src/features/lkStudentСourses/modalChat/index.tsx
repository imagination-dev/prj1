import {style} from "../../../common/styles/modal.style.ts";
import CloseModalButton from "../../../common/components/closeButtonModal";
import {Box, Modal} from "@mui/material";
import Chat from "../../../common/components/chat";
import {v4} from "uuid";

interface Props {
    isOpen: boolean
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

const ModalChat = ({isOpen, handleClose}: Props) => {
    return (
        <Modal
            open={isOpen}
            sx={{

                '& .MuiBackdrop-root': {
                    backgroundColor: 'rgba(217, 217, 217, 0.79)'
                }
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
                    width: '90%',
                    // height: '70%',
                    padding: '30px 10px 10px 10px'
                    // maxHeight: '500px',
                    // overflow: 'auto'
                }

            }}>
                <CloseModalButton  handleClose={handleClose}/>
                <Chat title={'Задайте свой вопрос'} data={messagesData}/>
            </Box>

        </Modal>
    );
};

export default ModalChat;