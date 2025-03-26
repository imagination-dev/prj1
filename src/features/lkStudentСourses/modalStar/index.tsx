import {style} from "../../../common/styles/modal.style.ts";
import CloseModalButton from "../../../common/components/closeButtonModal";
import {Box, Modal, Rating} from "@mui/material";
import {useState} from "react";
import s from './styles.module.css'

interface Props {
    isOpen: boolean
    rating?: number
    handleClose: () => void
    changeScore?: (s: number) => void
}

const ModalStar = ({isOpen, rating = 0, handleClose, changeScore}: Props) => {
    const [value, setValue] = useState<null | number>(rating)
    const [isConfirm, setIsConfirm] = useState(false)

    return (
        <Modal
            open={isOpen}
            sx={{
                '& .MuiBackdrop-root': {
                    backgroundColor: 'rgba(217, 217, 217, 0.9)'
                }
            }}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style({width: 616})}>
                <CloseModalButton handleClose={handleClose}/>
                <div className={s.rating}>
                    {!isConfirm ? <>
                        {/*<p className={classNames(s.title, s.title_hidden)}>Оцените</p>*/}
                        <Rating
                            sx={{
                                fontSize: '36px',
                                '& .MuiRating-icon': {
                                    color: 'rgba(251, 209, 103, 1)'
                                },
                                '@media screen and (max-width: 768px)': {
                                    fontSize: '50px',
                                }
                            }}
                            size={'large'}
                            name="simple-controlled"
                            value={value}
                            onChange={(_, newValue) => {
                                setValue(newValue);
                                setIsConfirm(true)
                                changeScore && changeScore(newValue || 0);
                            }}
                        />
                    </> : <p className={s.title}>Спасибо за вашу оценку!</p>}
                </div>
            </Box>
        </Modal>
    );
};

export default ModalStar;