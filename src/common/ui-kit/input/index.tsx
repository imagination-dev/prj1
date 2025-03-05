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
    type?: string
}

const Input = ({label, type = 'text', onBlur, error = false, name, helperText = '', value, onChange}: IProps) => {

    return (
        <div className={s.container}>
            <TextField type={type} error={error}
                       onBlur={onBlur} name={name}
                       sx={{
                           "& .MuiFormLabel-root": {
                               fontFamily: 'Gilroy-Regular,sans-serif',
                               fontWeight: 400,
                               fontSize: '16px',
                               color: "rgba(101, 100, 108, 1)"

                           },
                       }}
                       value={value}
                       onChange={onChange}
                       fullWidth id="outlined-basic" label={label} variant="outlined"/>
            {helperText && <p className={s.error_text}>{helperText}</p>}
        </div>

    );
};

export default Input;