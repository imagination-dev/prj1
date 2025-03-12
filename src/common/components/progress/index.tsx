import s from './styles.module.css'
import {LinearProgress, linearProgressClasses, styled} from "@mui/material";
import {useEffect, useState} from "react";
import {classNames} from "../../utils/classNames.ts";

interface IProps {
    value: number
    classNameLabel?: string
    isWhiteBackground?: boolean
}

export const Progress = ({value = 0, classNameLabel = '', isWhiteBackground = false}: IProps) => {
    const BorderLinearProgress = styled(LinearProgress)(({theme}) => ({
        height: 7,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: isWhiteBackground ? '#fff' : 'rgba(255,255,255,0)',
            ...theme.applyStyles('dark', {
                backgroundColor: 'rgba(255,255,255,0)',
            }),
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: 'rgba(38, 211, 103, 1)',
            ...theme.applyStyles('dark', {
                backgroundColor: 'rgba(38, 211, 103, 1)',
            }),
        },
    }));

    const [count, setCount] = useState<number>(0)

    useEffect(() => {
        const animationDuration = 1000;
        const startTime = Date.now();
        const startValue = count;
        const endValue = value;
        const endTime = startTime + animationDuration;

        const animate = () => {
            const now = Date.now();
            const progress = Math.min(1, (now - startTime) / animationDuration);
            const currentValue = startValue + (endValue - startValue) * progress;

            setCount(Math.round(currentValue));

            if (now < endTime) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [value]);
    return (
        <div className={classNames(s.test)}>
            <BorderLinearProgress variant="determinate" value={count}/>
            <p className={classNames(s.percent, classNameLabel)}><span>{`${count.toFixed(0)}%`}</span></p>
        </div>
    );
};
