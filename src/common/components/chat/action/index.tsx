import s from './styles.module.css'
import SendIcon from '../../../assets/send_icon.svg?react'
import MediaIcon from '../../../assets/media_btn.svg?react'
import React, {useEffect, useRef, useState} from "react";
import {Avatar, useMediaQuery} from "@mui/material";
import {classNames} from "../../../utils/classNames.ts";

const Action = ({sendMessage, classNameAction,classNameActionBtns, classNameActionWrapper}: any) => {
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
    const handleFileChange = (e: any) => {
        const files: any = e.target.files;
        if (files) {
            const imageFiles = Array.from(files).filter((file: any) => file.type.startsWith('image/'));
            setSelectedFiles(imageFiles);

            if (imageFiles.length > 0) {
                const lastFile: any = imageFiles[imageFiles.length - 1];
                const objectURL = URL.createObjectURL(lastFile);
                setAvatarSrc(objectURL);
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault(); // Предотвращаем перенос строки
            sendMessage(value, clear);
        }
    };

    useEffect(() => {
        if (areaRef.current) {
            areaRef.current.style.height = "auto"; // Сброс высоты, чтобы пересчитать
            areaRef.current.style.height = Math.min(areaRef.current.scrollHeight, 4 * (query768 ? 14 : 16)) + "px"; // Ограничение 3 строки
        }
    }, [value]);

    return (
        <div className={classNames(classNameActionWrapper)}>
            <div className={classNames(s.box, classNameAction)}>
                <div className={s.teaxt_area_box}>
                    <textarea
                        rows={1}
                        onKeyDown={handleKeyDown}
                        ref={areaRef}
                        style={{
                            minHeight: query768 ? '14px' : "16px", // Высота одной строки
                            maxHeight: query768 ? '54px' : "64px", // Высота трех строк (3 * 24px)
                        }}
                        placeholder={'Напишите сообщение....'} value={value} onChange={handleChange}
                        className={s.text_area}/>
                </div>
                <div className={classNames(s.actions,classNameActionBtns)}>


                    <div className={s.media}>
                        {avatarSrc &&
                            <div className={s.avatar} onClick={() => document.getElementById('fileInput')!.click()}>
                                {selectedFiles.length > 1 && <p className={s.counter}>+{selectedFiles.length - 1}</p>}
                                <Avatar src={avatarSrc} sx={{borderRadius: "10px", width: '40px', height: '40px'}}/>
                            </div>}
                        {!avatarSrc && <button
                            onClick={() => document.getElementById('fileInput')!.click()} // Кликаем по скрытому input
                            style={{

                                cursor: 'pointer'
                            }}
                        >
                            <MediaIcon/>
                        </button>}
                        <input
                            key={new Date().getMilliseconds()}
                            id="fileInput"
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleFileChange}
                            style={{display: 'none'}}/>

                    </div>

                    <div className={s.send_message} onClick={() => sendMessage(value, clear)}>
                        <SendIcon style={{marginRight: 8}}/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Action;