import {TextField} from "@mui/material";
import s from './styles.module.css'

import {ChangeEventHandler} from "react";

interface IProps {
    label: string
    error?: boolean
    helperText?: string
    value: string
    onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    onBlur?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    name: string
    type?: string
    InputProps?: any
    ref?: any
    id?: any
}


const Input = ({
                   label,
                   id = 0,
                   ref = null,
                   InputProps = {},
                   type = 'text',
                   onBlur,
                   error = false,
                   name,
                   helperText = '',
                   value,
                   onChange,
               }: IProps) => {

    return (
        <div className={s.container} onClick={(e) => {
            // e.preventDefault()
            e.stopPropagation()
        }}>
            <TextField ref={ref} type={type} error={error}
                       InputProps={{
                           ...InputProps,
                       }}
                       autoComplete="new-password"
                       size={'small'}
                       onBlur={onBlur} name={name}
                       sx={{
                           "& .MuiFormLabel-root": {
                               fontFamily: 'Gilroy-Regular,sans-serif',
                               fontWeight: 400,
                               fontSize: '16px',
                               color: !error ? "rgba(101, 100, 108, 1)" : "#d32f2f",

                           },
                       }}
                       value={value}
                       onChange={onChange}
                       fullWidth id={"outlined-basic" + id} label={label}
                       variant="standard"
            />
            {helperText && <p className={s.error_text}>{helperText}</p>}
        </div>

    );
};

export default Input;