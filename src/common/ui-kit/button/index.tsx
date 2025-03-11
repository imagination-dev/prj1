import {classNames} from "../../utils/classNames.ts";
import s from './styles.module.css'
import {JSX} from "react";

interface IProps {
    className?: string
    children: JSX.Element | string
    type?: "button" | "reset" | "submit"
    onClick?: () => void
    disabled?: boolean
    variant?: 1 | 2
}

const Button = ({children, onClick, variant = 1, className = '', type = 'button', disabled = false}: IProps) => {
    return (
        <div className={classNames(s.btn_box, variant === 2 && s.btn_box_v2, className, disabled && s.disabled)}>
            <button disabled={disabled} onClick={onClick && onClick} type={type}
                    className={classNames(s.btn)}>{children}</button>
        </div>

    );
};

export default Button;