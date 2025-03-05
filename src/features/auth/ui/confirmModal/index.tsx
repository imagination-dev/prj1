import {Box, Modal} from "@mui/material";
import s from './styles.module.css'
import CodeInput from "./code";
import {useContext, useEffect, useState} from "react";
import Button from "../../../../common/ui-kit/button";
import {classNames} from "../../../../common/utils/classNames.ts";
import moment from "moment";
import {useTimer} from "react-timer-hook";
import CloseModalButton from "../../../../common/components/closeButtonModal";
import {useNavigate} from "react-router";
import {AuthContext} from "../../../../app/App.tsx";
import {style} from "../../../../common/styles/modal.style.ts";

interface IProps {
    isOpen: boolean
    handleClose: () => void
    value: string
}

const ConfirmModal = ({isOpen, handleClose, value}: IProps) => {
    const navigate = useNavigate()
    const {login} = useContext(AuthContext)
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const [error, setError] = useState('')

    const {
        totalSeconds,
        isRunning,
        restart,

    } = useTimer({expiryTimestamp: new Date(moment().add(5, 'seconds').toDate()), autoStart: true})

    const handleResentCode = () => {
        if (!isRunning) {
            restart(new Date(moment().add(5, 'seconds').toDate()), true)
        }
    }

    const handleConfirm = () => {
        const isEmpty = code.some((el) => !el)
        if (isEmpty) {
            setError('Заполинте все поля')
            return
        }

        const isValidCode = code.every((el) => el === '1')
        if (isValidCode) {
            login()
            console.log('Navigating to /lk_student');
            navigate('/lk_student')

        } else {
            setError('Неверный код')
        }
    }

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isOpen]);

    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            sx={{
                '& .MuiBackdrop-root': {
                    backgroundColor: 'rgba(217, 217, 217, 0.79)'
                }
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style({})}>


                <CloseModalButton handleClose={handleClose}/>
                <h3 className={s.title}>Проверка почты</h3>
                <p className={classNames(s.description, error && s.error)}>{error ? error : <>Введите код отправленный
                    на: <span>{value}</span></>}</p>
                <CodeInput isError={error !== ''} setCode={(v) => {
                    setCode(v)
                    setError('')
                }} code={code}/>

                <div className={s.btn_action}>
                    <p onClick={handleResentCode}
                       style={{
                           textDecoration:isRunning ? 'none' : 'underline'
                       }}
                       className={s.resend_code}>{`Отправить код повторно ${totalSeconds ? `(${totalSeconds})` : ''}`}</p>
                    <Button onClick={handleConfirm}>Подтвердить</Button>
                </div>
            </Box>
        </Modal>
    );
};

export default ConfirmModal;