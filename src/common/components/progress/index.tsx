import s from './styles.module.css'

interface IProps {
    value: number
}

export const Progress = ({value = 0}: IProps) => {

    return (
        <div className={s.progress}>
            <div className={s.line} style={{
                width: `${value + 1}%`
            }}/>

        </div>
    );
};
