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
    mw?: number
    height?: number
}

const Button = ({
                    children,
                    height = 40,
                    onClick,
                    variant = 1,
                    className = '',
                    type = 'button',
                    mw = 200,
                    disabled = false
                }: IProps) => {
    return (
        <div
            style={{height: `${height}px`, maxWidth: `${mw}px`}}
            className={classNames(s.btn_box, variant === 2 && s.btn_box_v2, className, disabled && s.disabled)}>
            <button disabled={disabled} onClick={onClick && onClick} type={type}
                    className={classNames(s.btn)}
                    style={{height: `${height - 2}px`}}
            >
                <div className={s.text}>
                    {children}
                </div>
            </button>
        </div>

    );
};

export default Button;