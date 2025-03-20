import s from "./styles.module.css";
import {ChangeEventHandler, useState} from "react";
import UploadIcon from '../../assets/upload.svg?react'
import {classNames} from "../../utils/classNames.ts";

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

    const [mouseEnter, setMouseEnter] = useState(false)
    const [focus, setFocus] = useState(false)

    return (
        <div className={s.container} onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
        }}>
            <textarea
                onMouseEnter={() => setMouseEnter(true)}
                onMouseLeave={() => setMouseEnter(false)}
                onFocus={() => setFocus(true)}
                onBlur={(e) => {
                    onBlur(e)
                    setFocus(false)
                }} name={name}

                value={value}
                onChange={onChange}
                className={classNames(
                    s.text_area,
                    mouseEnter && s.text_area_enter,
                    error && s.text_area_error,
                )}
            />

            <p className={classNames(
                s.label,
                error && s.label_error,
                focus && s.label_focus,
                value && s.label_width_value,
            )}>{placeholder}</p>
            {withTools && <div className={s.tools}>
                <UploadIcon/>
            </div>}

            {helperText && <p className={s.error_text}>{helperText}</p>}
        </div>
    );
};

export default TextArea;