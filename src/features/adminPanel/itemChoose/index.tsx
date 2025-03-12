import s from './styles.module.css'
import {classNames} from "../../../common/utils/classNames.ts";

interface Props {
    title: string
    count: number | null
    active: boolean
    onClick: () => void
}

const ItemChoose = ({title, count = null, active = false, onClick}: Props) => {
    return (
        <div className={classNames(s.item, active && s.item_active)} onClick={onClick}>
            <p className={classNames(s.title, active && s.title_active)}>{title}</p>
            {count && <div className={classNames(s.count, active && s.count_active)}>{count}</div>}
        </div>
    );
};

export default ItemChoose;