import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import s from './styles.module.css'
import {ChangeEventHandler} from "react";
import {ruRU} from '@mui/x-date-pickers/locales';


interface IProps {
    label: string
    error?: boolean
    disabled?: boolean
    helperText?: string
    value: any
    onChange: (value: any) => void
    onBlur: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    name: string
    type?: string
    InputProps?: any
}

const DateInput = ({
                       label,
                       onBlur,
                       error = false,
                       disabled = false,
                       name,
                       helperText = '',
                       value,
                       onChange
                   }: IProps) => {
    return (
        <div className={s.container} onClick={(e) => {
            e.stopPropagation()
        }}>
            <LocalizationProvider adapterLocale={'ru'} dateAdapter={AdapterDayjs}
                                  localeText={ruRU.components.MuiLocalizationProvider.defaultProps.localeText}>
                <DemoContainer sx={{
                    overflow: 'unset'
                }} components={['DatePicker']}>
                    <DatePicker disabled={disabled}
                                localeText={ruRU.components.MuiLocalizationProvider.defaultProps.localeText}
                                name={name}
                                sx={{
                                    width: '100%',
                                    "& .MuiFormLabel-root": {
                                        fontFamily: 'Gilroy-Regular,sans-serif',
                                        fontWeight: 400,
                                        fontSize: '16px',
                                        color: !error ? "rgba(101, 100, 108, 1)" : "#d32f2f",

                                    },
                                }}
                                value={value}
                                onChange={onChange}
                                label={label}
                                slotProps={{
                                    textField: {
                                        onBlur: onBlur,
                                        error: error,
                                        variant: 'standard',
                                        // size: 'small'
                                    },
                                }} format={'DD.MM.YYYY'}/>
                </DemoContainer>
            </LocalizationProvider>
            {helperText && <p className={s.error_text}>{helperText}</p>}
        </div>
    );
};

export default DateInput;