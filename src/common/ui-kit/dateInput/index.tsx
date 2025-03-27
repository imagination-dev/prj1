import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import s from './styles.module.css'
import {ChangeEventHandler} from "react";
import {ruRU} from '@mui/x-date-pickers/locales';
import {InputAdornment, useMediaQuery} from "@mui/material";
import EventIcon from '@mui/icons-material/Event';
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
    const query768 = useMediaQuery('(max-width:768px)');
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
                                    "& .Mui-disabled": {
                                        color: 'rgba(0, 0, 0, 0.38)',
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
                                        InputProps: query768 ? {
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <EventIcon
                                                        sx={{color: disabled ? 'rgba(0, 0, 0, 0.38)' : 'rgba(101, 100, 108, 1)'}}/>
                                                </InputAdornment>
                                            )
                                        } : {}
                                    },
                                }} format={'DD.MM.YYYY'}/>
                </DemoContainer>
            </LocalizationProvider>
            {helperText && <p className={s.error_text}>{helperText}</p>}
        </div>
    );
};

export default DateInput;