import {style} from "../../../common/styles/modal.style.ts";
import CloseModalButton from "../../../common/components/closeButtonModal";
import {Box, Modal, Rating} from "@mui/material";
import {useState} from "react";
import s from './styles.module.css'
import Button from "../../../common/ui-kit/button";
import {classNames} from "../../../common/utils/classNames.ts";

interface Props {
    isOpen: boolean
    handleClose: () => void
}

const ModalStar = ({isOpen, handleClose}: Props) => {
    const [value, setValue] = useState<null | number>(0)
    const [isConfirm, setIsConfirm] = useState(false)

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
            <Box sx={style({width: 440})}>
                <CloseModalButton handleClose={handleClose}/>
                <div className={s.rating}>
                    {!isConfirm ? <>
                        <p className={classNames(s.title, s.title_hidden)}>Оцените</p>
                        <Rating
                            sx={{
                                fontSize: '34px',
                                '@media screen and (max-width: 768px)': {
                                    fontSize: '50px',
                                }
                            }}
                            size={'large'}
                            name="simple-controlled"
                            value={value}
                            onChange={(_, newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </> : <p className={s.title}>Спасибо за вашу оценку!</p>}
                </div>
                {!isConfirm && <div className={s.btn}>
                    <Button onClick={() => setIsConfirm(true)}>Подтвердить</Button>
                </div>}
            </Box>
        </Modal>
    );
};

export default ModalStar;