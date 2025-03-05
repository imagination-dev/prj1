import s from './styles.module.css'
import {LinearProgress, linearProgressClasses, styled} from "@mui/material";

interface IProps {
    value: number
}

export const Progress = ({value = 0}: IProps) => {
    const BorderLinearProgress = styled(LinearProgress)(({theme}) => ({
        height: 7,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: 'rgba(255,255,255,0)',
            // border: '1px solid rgba(196, 196, 196, 1)',
            ...theme.applyStyles('dark', {
                backgroundColor: 'rgba(255,255,255,0)',
            }),
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: 'rgba(38, 211, 103, 1)',
            // border: '1px solid rgba(38, 211, 103, 1)',
            ...theme.applyStyles('dark', {
                backgroundColor: 'rgba(38, 211, 103, 1)',
            }),
        },
    }));
    return (
        <div className={s.test}>
            <BorderLinearProgress variant="determinate" value={value}/>
        </div>
        // <BorderLinearProgress variant="determinate" value={value}/>
        // <div className={s.progress}>
        //     <div className={s.line} style={{
        //         width: `${value + 1}%`
        //     }}/>
        //
        // </div>
    );
};
