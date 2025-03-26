import s from './styles.module.css'
import SendIcon from '../../../assets/send_icon.svg?react'
import MediaIcon from '../../../assets/upload.svg?react'
import {useRef, useState} from "react";
import {TextField, useMediaQuery} from "@mui/material";
import {classNames} from "../../../utils/classNames.ts";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Action = ({sendMessage, classNameAction, classNameActionBtns, classNameActionWrapper}: any) => {
    const query768 = useMediaQuery('(max-width:768px)');

    const [selectedFiles, setSelectedFiles] = useState<any>([]);
    const [avatarSrc, setAvatarSrc] = useState<any>(null);
    const areaRef = useRef<any>(null)
    const [value, setValue] = useState('')

    const handleChange = (e: any) => {
        const textarea = e.target;
        setValue(textarea.value);
    };

    const clear = () => {
        if (avatarSrc) {
            URL.revokeObjectURL(avatarSrc);
        }
        setValue('')
        setAvatarSrc(null)
        setSelectedFiles([])
        if (areaRef.current) {
            areaRef.current.focus()
        }
    }


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]; // Берем только один файл
        if (file && (file.type.startsWith("image/") || file.type === "application/pdf" || file.type === "application/msword" || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document")) {
            setSelectedFiles([file]); // Храним как массив из одного файла

            if (file.type.startsWith("image/")) {
                const objectURL = URL.createObjectURL(file);

                setAvatarSrc(objectURL); // Показываем превью только для изображений
            } else {
                setAvatarSrc(null); // Для документов превью не показываем
            }
        }
    };

    const handleKeyDown = (e: any) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault(); // Prevent new line
        }

        if (e.key === "Enter" && !e.shiftKey && (value || selectedFiles.length !== 0)) {
            e.preventDefault(); // Предотвращаем перенос строки
            sendMessage(value, clear, selectedFiles);
        }
    };

    return (
        <div className={classNames(classNameActionWrapper)}>
            <div className={classNames(s.box, classNameAction)}>
                <div className={s.teaxt_area_box} onClick={() => areaRef.current.focus()}>
                    <TextField
                        id="outlined-multiline-flexible"
                        multiline
                        inputRef={areaRef}
                        maxRows={query768 ? 8 : 4}
                        sx={{
                            border: "none",
                            '& .MuiOutlinedInput-root': {
                                '&:hover fieldset': {
                                    borderColor: 'transparent',
                                },
                                '& fieldset': {
                                    borderColor: 'transparent',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'transparent',
                                },
                            },

                            '& .MuiInputBase-root': {
                                padding: '4px',
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                },
                                '&.Mui-focused': {
                                    backgroundColor: 'transparent',
                                },
                            },
                            '& .MuiInputBase-input::placeholder': {
                                fontFamily: 'Gilroy-Regular, sans-serif',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '20px',
                                color: 'rgba(101, 100, 108, 1)',
                                '@media screen and (max-width: 768px)': {
                                    fontSize: '14px',
                                    lineHeight: '18px',
                                }
                            },
                            '& .MuiInputBase-input': {
                                fontFamily: 'Gilroy-Regular, sans-serif',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '20px',
                                color: 'rgba(101, 100, 108, 1)',
                                '@media screen and (max-width: 768px)': {
                                    fontSize: '14px',
                                    lineHeight: '18px',
                                }
                            },
                        }}
                        onKeyPress={handleKeyDown}
                        fullWidth
                        placeholder={'Напишите сообщение....'} value={value} onChange={handleChange}
                    />
                </div>

                <div className={classNames(s.actions, classNameActionBtns)}>


                    <div className={s.media}>
                        {selectedFiles.length !== 0 &&
                            <div className={s.avatar} onClick={() => {
                                setSelectedFiles([])
                                setAvatarSrc(null)
                            }}>
                                <DeleteOutlineIcon
                                    sx={{width: '34px', height: 'auto', color: 'rgb(159, 68, 68)'}}/>
                                {/*<Avatar src={avatarSrc} sx={{borderRadius: "10px", width: '40px', height: '40px'}}/>*/}
                            </div>}
                        {selectedFiles.length === 0 && <button
                            className={s.btn_upload}
                            onClick={() => document.getElementById('fileInput')!.click()} // Кликаем по скрытому input
                            style={{
                                cursor: 'pointer'
                            }}
                        >
                            <MediaIcon/>
                        </button>}
                        <input
                            id="fileInput"
                            type="file"
                            accept="image/*,.pdf,.doc,.docx"
                            onChange={handleFileChange}
                            style={{display: "none"}}
                        />

                    </div>

                    <div
                        className={classNames(s.send_message, (value || selectedFiles.length !== 0) && s.send_message_sussess)}
                        onClick={() => (value || selectedFiles.length !== 0) && sendMessage(value, clear, selectedFiles)}>
                        <SendIcon style={{marginRight: 8}}/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Action;