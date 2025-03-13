import s from './styles.module.css'
import {FormControl, InputLabel, MenuItem} from "@mui/material";
import Select from '@mui/material/Select';
import {ChangeEventHandler, useEffect, useRef} from "react";

interface IProps {
    error?: boolean
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
                        name,
                        helperText = '',
                        value,
                        data,
                        onChange
                    }: IProps) => {
    // const [selectedValue, setSelectedValue] = useState('');
    const inputRef = useRef<any>(null)

    const unfocus = () => {
        setTimeout(() => {
            inputRef.current.focus()
        }, 0)
    }

    const handleChange = (event: any) => {
        onChange(event);
    };

    useEffect(() => {
        document.body.addEventListener('click', unfocus)

        return () => {
            document.body.removeEventListener('click', unfocus)
        }
    }, []);


    return (
        <div className={s.box}>
            <input className={s.unfocus} ref={inputRef} type="text"/>
            <FormControl size={'small'} variant={'filled'} fullWidth sx={{
                "& .MuiFormLabel-root": {
                    fontFamily: 'Gilroy-Regular,sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    color: !error ? "rgba(101, 100, 108, 1)" : "#d32f2f",

                },
            }}>
                <InputLabel id="demo-simple-select-label">{placeholder}</InputLabel>
                <Select
                    fullWidth
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    error={error}

                    onBlur={onBlur}
                    name={name}
                    // size={'small'}
                    sx={{
                        // minHeight: '50px',
                        // height: '50px',
                        // display: 'flex',
                        // alignItems: 'center',
                        // justifyContent: 'center',
                        fontFamily: 'Gilroy-Regular,sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        // overflow: "hidden", // предотвращает расширение
                        // whiteSpace: "nowrap", // не переносит текст
                        // textOverflow: "ellipsis", // добавляет '...' при обрезке

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