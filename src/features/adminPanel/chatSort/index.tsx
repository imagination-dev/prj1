import s from './styles.module.css'
import ItemChoose from "../itemChoose";
import {v4} from "uuid";
import {useEffect} from "react";

const data = [
    {title: 'все', count: 25, id: v4()},
    {title: 'Непрочитанные', count: 6, id: v4()},
    {title: 'Неотвеченные', count: 25, id: v4()},
    {title: 'Важные', count: 250, id: v4()},
]

interface Props {
    value: string | null
    handleChange: (v: string) => void
}

const ChatSort = ({value, handleChange}: Props) => {

    useEffect(() => {
        handleChange(data[0].id)
    }, [])

    return (
        <div className={s.box}>

            <div className={s.items}>
                {data.map((el) => <ItemChoose key={el.id} onClick={() => handleChange(el.id)} active={value === el.id}
                                              title={el.title} count={el.count}/>)}

            </div>
        </div>
    );
};

export default ChatSort;