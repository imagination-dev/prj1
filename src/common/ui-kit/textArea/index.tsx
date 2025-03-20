import s from "./styles.module.css";
import {ChangeEventHandler} from "react";
import UploadIcon from '../../assets/upload.svg?react'
import {TextField} from "@mui/material";

interface IProps {
    error?: boolean
    withTools?: boolean
    helperText?: string
    value: string
    onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    onBlur: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    name: string
    placeholder: string
}

const TextArea = ({
                      onBlur,
                      withTools = false,
                      placeholder,
                      error = false,
                      name,
                      helperText = '',
                      value,
                      onChange
                  }: IProps) => {


    return (
        <div className={s.container} onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
        }}>
            <TextField
                id="outlined-multiline-flexible"
                label={placeholder}
                multiline

                maxRows={4}
                error={error}
                onBlur={onBlur} name={name}
                // variant="outlined"
                variant="filled"
                sx={{
                    // background: '#fff',
                    "& .MuiFormLabel-root": {
                        fontFamily: 'Gilroy-Regular,sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        color: !error ? "rgba(101, 100, 108, 1)" : "#d32f2f",
                    },
                    "& .MuiInputBase-input": {
                        paddingBottom: '20px',
                        minHeight: "140px",
                        resize: "vertical",
                    },
                }}
                value={value}
                onChange={onChange}
                fullWidth
            />

            {withTools && <div className={s.tools}>
                <UploadIcon/>
            </div>}

            {helperText && <p className={s.error_text}>{helperText}</p>}
        </div>
    );
};

export default TextArea;