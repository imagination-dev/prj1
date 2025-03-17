import s from './styles.module.css'
import {classNames} from "../../utils/classNames.ts";
import {ReactNode} from "react";

interface IProps {
    className?: string
    children: ReactNode
}

const Wrapper = ({children, className = ''}: IProps) => {
    return (
        <div className={classNames(s.wrapper, className)}>

            {children}
        </div>
    );
};

export default Wrapper;