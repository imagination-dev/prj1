import {classNames} from "../../utils/classNames.ts";
import s from './styles.module.css'
import {JSX} from "react";

interface IProps {
    className?: string
    children: JSX.Element | string
    type?: "button" | "reset" | "submit"
    onClick?: () => void
    disabled?:boolean
}

const Button = ({children, onClick, className = '', type = 'button',disabled = false}: IProps) => {
    return (
        <div className={classNames(s.btn_box, className,disabled && s.disabled)}>
            <button disabled={disabled} onClick={onClick && onClick} type={type} className={classNames(s.btn)}>{children}</button>
        </div>

    );
};

export default Button;