import {JSX} from "react";
import s from './styles.module.css'
import sucsess from '../../../common/assets/sucsess.svg'

interface Props {
    title: string
    data: unknown[]
    children: JSX.Element
}

const Info = ({title, data, children}: Props) => {
    return (
        <div className={s.box}>
            <h3 className={s.title}>{title}</h3>

            <div className={s.items}>
                {data.map((el: any) => <p className={s.item} key={el?.id}>
                    <img src={sucsess} alt="sucsess"/>
                    {el?.title}
                </p>)}
            </div>
            <div className={s.btn}>
                {children}
            </div>
        </div>
    );
};

export default Info;