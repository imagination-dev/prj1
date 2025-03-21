import s from './styles.module.css'
import {classNames} from "../../../common/utils/classNames.ts";

interface Props {
    title: string
    count: number | null
    active: boolean
    isStupidMode?: boolean
    onClick: () => void
    isFirst?: boolean
    isLast?: boolean
}

const ItemChoose = ({title, isFirst, isLast, isStupidMode = false, count = null, active = false, onClick}: Props) => {
    const styles: any = {}
    if (isFirst) {
        styles.paddingTop = 0
        styles.paddingBottom = 5
        styles.height = 29
    }
    if (isLast) {
        styles.paddingBottom = 0
        styles.height = 'fit-content'
    }
    return (
        <div
            style={styles}
            className={classNames(s.item, active && s.item_active, isStupidMode && s.item_stupid, (active && isStupidMode) && s.item_active_stupid)}
            onClick={onClick}>
            <p className={classNames(s.title, active && s.title_active)}>{title}</p>
            {count && <div
                className={classNames(s.count, active && s.count_active, (active && isStupidMode) && s.count_active_stupid)}>{count}</div>}
        </div>
    );
};

export default ItemChoose;