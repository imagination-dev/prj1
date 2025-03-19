import s from './styles.module.css'
import CloseIcon from '../../assets/close.svg?react';

const CloseModalButton = ({handleClose}: { handleClose: () => void }) => {
    return (
        <div className={s.box} onClick={handleClose}>
            <CloseIcon/>
        </div>
    );
};

export default CloseModalButton;