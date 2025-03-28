import s from './style.module.css'
import NormalButton from "../../../common/ui-kit/normalButton";
import {useState} from "react";
import ModalStar from "../modalStar";

const VideoContent = () => {
    const [openModalStar, setOpenModalStar] = useState(false)
    const [userScore, setUserScore] = useState(0)
    return (
        <div className={s.box}>

            {openModalStar && <ModalStar changeScore={setUserScore} isOpen={openModalStar} rating={userScore}
                                         handleClose={() => setOpenModalStar(false)}/>}
            <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Rick Astley - Never Gonna Give You Up (Official Music Video)" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen></iframe>
            <p className={s.description}>На связи Rick Astley. Наконец-то! Приступаем к первому уроку по
                каллиграфии...</p>

            <div className={s.review}>
                <p className={s.rating}>(<span>{4.5}</span>/5)</p>
                <NormalButton w={123} isStaticBg={userScore === 0} onClick={() => setOpenModalStar(true)}
                              bc={'rgba(251, 209, 103, 1)'}>{userScore === 0 ? 'Оценить' : 'Изменить'}</NormalButton>
            </div>

        </div>
    );
};

export default VideoContent;