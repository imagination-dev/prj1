import s from './styles.module.css'
import {FormControl, InputLabel, MenuItem} from "@mui/material";
import Select from '@mui/material/Select';
import {ChangeEventHandler, useRef, useState} from "react";

interface IProps {
    error?: boolean
    disabled?: boolean
    helperText?: string
    value: string
    onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    onBlur: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    name: string
    placeholder: string
    data: unknown[]
}

const SelectItem = ({
                        onBlur,
                        placeholder,
                        error = false,
                        disabled = false,
                        name,
                        helperText = '',
                        value,
                        data,
                        onChange
                    }: IProps) => {
    // const [selectedValue, setSelectedValue] = useState('');
    const inputRef = useRef<any>(null)
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setTimeout(() => {
            console.log(inputRef.current)
            inputRef.current.focus()
        }, 0)
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };


    const handleChange = (event: any) => {
        onChange(event);
    };

    return (
        <div className={s.box}>
            <input className={s.unfocus} ref={inputRef} type="text"/>
            <FormControl

                disabled={disabled}
                size={'small'}
                variant={'standard'} fullWidth sx={{
                height: '48px',
                '& .MuiInputBase-root': {
                    height: '48px'
                },
                "& .MuiFormLabel-root": {
                    fontFamily: 'Gilroy-Regular,sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    color: !error ? "rgba(101, 100, 108, 1)" : "#d32f2f",

                },
            }}>
                <InputLabel id="demo-simple-select-label">{placeholder}</InputLabel>
                <Select
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    MenuProps={{
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left"
                        },
                        transformOrigin: {
                            vertical: "top",
                            horizontal: "left"
                        },
                        PaperProps: {
                            sx: {
                                maxHeight: 200, // Максимальная высота меню
                                overflowY: "auto",
                            },
                        },
                        // getContentAnchorEl: null
                    }}

                    fullWidth
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    error={error}

                    onBlur={onBlur}
                    name={name}
                    sx={{
                        fontFamily: 'Gilroy-Regular,sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',

                        // minHeight: '50px',
                        // height: '50px',
                    }}

                    label={placeholder}
                    onChange={handleChange}
                >
                    {data.map((el: any) => {
                        return <MenuItem sx={{
                            height: '40px',
                            fontFamily: 'Gilroy-Regular,sans-serif',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '100%',

                        }} key={el.id} value={el.id}>{el.title}</MenuItem>
                    })}
                </Select>
            </FormControl>
            {helperText && <p className={s.error_text}>{helperText}</p>}
        </div>
    );
};

export default SelectItem;