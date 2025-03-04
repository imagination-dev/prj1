import s from './styles.module.css'
import {JSX} from "react";

interface IProps {
    children: JSX.Element | string
    onClick: () => void
    bc: string
    w?: string | number
}

const NormalButton = ({children, onClick, bc, w = '100%'}: IProps) => {

    return (
        <div onClick={onClick} className={s.btn} data-hover={bc} style={{
            borderColor: bc,
            maxWidth: w,
            // @ts-ignore
            '--hover-color': bc,
        }}>
            {children}
        </div>
    );
};

export default NormalButton;