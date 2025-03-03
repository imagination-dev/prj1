import {TextField} from "@mui/material";
import s from './styles.module.css'
import {ChangeEventHandler} from "react";

interface IProps {
    label: string
    error?: boolean
    helperText?: string
    value: string
    onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    onBlur: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    name: string
}

const Input = ({label, onBlur, error = false, name, helperText = '', value, onChange}: IProps) => {

    return (
        <div className={s.container}>
            <TextField error={error} onBlur={onBlur} name={name} helperText={helperText} value={value}
                       onChange={onChange}
                       fullWidth id="outlined-basic" label={label} variant="outlined"/>
        </div>

    );
};

export default Input;