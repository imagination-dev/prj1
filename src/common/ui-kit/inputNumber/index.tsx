import {ChangeEventHandler, useRef} from "react";
import s from "../input/styles.module.css";


interface IProps {
    label: string;
    error?: boolean;
    helperText?: string;
    value: string;
    onChange: (value: string | undefined) => void; // исправлено
    onBlur?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    name: string;
    type?: string;
    InputProps?: any;
    ref?: any;
    id?: any;
    disabled?: boolean;
}

import {createTheme, ThemeProvider} from "@mui/material/styles";
import PhoneInput, {locale} from "mui-phone-input";

const theme = createTheme({
    typography: {
        fontFamily: "Gilroy-Regular, sans-serif",
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    marginTop: '20px !important',
                    paddingTop: '8px !important'
                },
            },
        },
    },
}, locale("ruRU"));

const InputNumber = ({
                         label,
                         disabled = false,
                         id = 0,
                         type = "text",
                         onBlur,
                         name,
                         error = false,
                         helperText = "",
                         value = "", // ← Дефолтное значение
                         onChange,
                     }: IProps) => {
    const phoneInputRef = useRef(null);

    return (

        <div
            className={s.container}
            onClick={(e) => {
                e.stopPropagation();
            }}
        >
            <ThemeProvider theme={theme}>
                <PhoneInput
                    enableSearch
                    ref={phoneInputRef} type={type}
                    error={error}
                    disabled={disabled}
                    enableArrow
                    distinct
                    autoComplete="new-password"
                    // size={'small'}
                    onBlur={onBlur} name={name}
                    sx={{
                        "& .Mui-disabled input:-webkit-autofill": {
                            "-webkit-text-fill-color": "rgba(0, 0, 0, 0.38) !important",
                        },
                        "& .MuiAutocomplete-popper": {
                            marginTop: "20px !important", // Сдвигаем выпадающее меню вниз
                        },
                        "& .MuiPaper-root": {
                            backgroundColor: 'red !important',
                        },
                        "& .MuiFormLabel-root": {
                            fontFamily: 'Gilroy-Regular,sans-serif',
                            fontWeight: 400,
                            fontSize: '16px',
                            color: !error ? "rgba(101, 100, 108, 1)" : "#d32f2f",

                        },
                    }}

                    searchPlaceholder={'Поиск страны'}
                    value={value}

                    onChange={(_, event: any) => {
                        console.log(event)
                        onChange(event)
                    }}
                    fullWidth id={"outlined-basic" + id} label={label}
                    variant="standard"
                />
            </ThemeProvider>
            {helperText && <p className={s.error_text}>{helperText}</p>}
        </div>

    );
};

export default InputNumber;
