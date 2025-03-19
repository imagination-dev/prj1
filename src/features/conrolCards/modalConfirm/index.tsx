import {Box, Modal} from "@mui/material";
import {style} from "../../../common/styles/modal.style.ts";
import CloseModalButton from "../../../common/components/closeButtonModal";
import s from "../../../common/modals/modalSucssess/styles.module.css";
import Button from "../../../common/ui-kit/button";

interface Props {
    open: boolean
    handleClose: () => void
}

const ModalConfirm = ({open, handleClose}: Props) => {
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
            <Box sx={style({width: 390})}>


                <CloseModalButton handleClose={handleClose}/>

                <div className={s.content}>
                    <h3 className={s.title}>отписка</h3>
                    <p className={s.description}>Вы действительно хотите отписаться?</p>
                    <div className={s.btns}>
                        <Button mw={126} className={s.btn} onClick={handleClose}>Да</Button>
                        <Button mw={126} variant={2} className={s.btn} onClick={handleClose}>Нет</Button>
                    </div>

                </div>
            </Box>
        </Modal>
    );
};

export default ModalConfirm;