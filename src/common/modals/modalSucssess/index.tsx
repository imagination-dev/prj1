import s from './styles.module.css'
import {style} from "../../styles/modal.style.ts";
import CloseModalButton from "../../components/closeButtonModal";
import {Box, Modal} from "@mui/material";
import Button from "../../ui-kit/button";

interface Props {
    open: boolean
    handleClose: () => void
}

const ModalSuccess = ({open, handleClose}: Props) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            sx={{
                '& .MuiBackdrop-root': {
                    backgroundColor: 'rgba(217, 217, 217, 0.9)'
                }
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style({width: 407})}>


                <CloseModalButton handleClose={handleClose}/>

                <div className={s.content}>
                    <h3 className={s.title}>спасибо за обращение</h3>
                    <p className={s.description}>В ближайшее время мы ознакомимся с письмом и дадим обратную связь.</p>
                    <Button height={50} mw={202} onClick={handleClose}>Продолжить</Button>
                </div>
            </Box>
        </Modal>
    );
};

export default ModalSuccess;