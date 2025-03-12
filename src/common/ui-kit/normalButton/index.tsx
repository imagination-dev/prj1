import s from './styles.module.css'
import {JSX} from "react";
import {classNames} from "../../utils/classNames.ts";

interface IProps {
    children: JSX.Element | string
    onClick: () => void
    bc: string
    w?: string | number
    className?: string
    isStaticBg?: boolean
}

const NormalButton = ({children, isStaticBg = false, onClick, bc, w = '100%', className = ''}: IProps) => {

    return (
        <div onClick={onClick} className={classNames(s.btn, className)} data-hover={bc} style={{
            borderColor: bc,
            maxWidth: w,
            backgroundColor: isStaticBg ? bc : '',
            // @ts-ignore
            '--hover-color': bc,
        }}>
            {children}
        </div>
    );
};

export default NormalButton;