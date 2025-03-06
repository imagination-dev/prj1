import s from './styles.module.css'
import SendIcon from '../../../assets/send_icon.svg?react'
import MediaIcon from '../../../assets/media_btn.svg?react'
import React, {useRef, useState} from "react";
import {Avatar} from "@mui/material";
import {classNames} from "../../../utils/classNames.ts";

const Action = ({sendMessage, classNameAction,classNameActionWrapper}: any) => {
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

    return (
        <div className={classNames(classNameActionWrapper)}>
            <div className={classNames(s.box, classNameAction)}>
            <textarea
                onKeyDown={handleKeyDown}
                ref={areaRef}
                placeholder={'Напишите сообщение....'} value={value} onChange={handleChange}
                className={s.text_area}/>
                <div className={s.actions}>

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