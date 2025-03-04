
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import s from './styles.module.css'
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

interface IProps {
    type: 'left' | 'right'
    onClick: () => void
}

const ArrowSwiper = ({type, onClick}: IProps) => {
    return (
        <div className={s.arrow} onClick={onClick}>
            {type === 'left' ? <ArrowLeftOutlinedIcon
                style={{height: '32px', width: 'auto'}}/> : <ArrowRightOutlinedIcon
                style={{height: '32px', width: 'auto'}}/>}
        </div>
    );
};

export default ArrowSwiper;