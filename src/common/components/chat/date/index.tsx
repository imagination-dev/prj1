import s from './styles.module.css'
import {classNames} from "../../../utils/classNames.ts";

const DateMessage = ({currentDate, isSticky}: any) => {

    return (
        <div data-sticky={'sticky'}
             style={{
                 // opacity: (isSticky && !isScrolling) ? 0 : 1,
                 // marginTop: isFirst && 0
             }}
             className={classNames(s.title, (isSticky) && s.sticky)}
        >
            {currentDate}
        </div>
    );
};

export default DateMessage;