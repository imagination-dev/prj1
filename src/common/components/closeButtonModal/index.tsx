import {IconButton} from "@mui/material";
import s from './styles.module.css'
import CloseIcon from '../../assets/close.svg?react';

const CloseModalButton = ({handleClose}: { handleClose: () => void }) => {
    return (
        <div className={s.box}>
            <IconButton onClick={handleClose} sx={{
                '@media screen and (max-width: 768px)': {
                    backgroundColor: '#fff'
                }
            }}>
                <CloseIcon/>
            </IconButton>
        </div>
    );
};

export default CloseModalButton;