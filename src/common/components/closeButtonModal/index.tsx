import {IconButton} from "@mui/material";
import s from './styles.module.css'
import CloseIcon from '@mui/icons-material/Close';

const CloseModalButton = ({handleClose}: { handleClose: () => void }) => {
    return (
        <div className={s.box}>
            <IconButton onClick={handleClose} sx={{
                '@media screen and (max-width: 768px)': {
                    backgroundColor: '#fff'
                }
            }}>
                <CloseIcon sx={{
                    color: '#fff', height: '28px', width: '28px',
                    '@media screen and (max-width: 768px)': {
                        color: 'rgba(0, 0, 0, 1)'
                    }
                }}/>
            </IconButton>
        </div>
    );
};

export default CloseModalButton;