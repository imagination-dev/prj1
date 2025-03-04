import Wrapper from "../../common/components/wrapper";
import s from './styles.module.css'
import Navigate from "./navigate";
import Progress from "./0-progress";
import VideoContent from "./1-videoContent";
import Carousel from "./2-carusel";
import Info from "./3-info";
import NormalButton from "../../common/ui-kit/normalButton";
import DownloadIcon from '../../common/assets/download.svg?react'
import MailIcon from "../../common/assets/mail_icon.svg?react";
import {useMediaQuery} from "@mui/material";

const mock = {
    1: [
        {id: 1, title: "Начнете с несложных упражнений;"},
        {id: 2, title: "Потренируете руку на простых каллиграфических элементах;"},
        {id: 3, title: "Придумаете собственные элементы."},
    ],
    2: [
        {id: 1, title: "Пропишите разлинованный лист, придумывая свои элементы или используя элементы из урока."},
    ],
}

const LkStudentCourses = () => {
    const query768 = useMediaQuery('(max-width:768px)');

    return (
        <Wrapper className={s.wrapper}>
            <>

                {!query768 && <Navigate/>}

                <div className={s.right}>
                    <Progress/>
                    <VideoContent/>
                    <Carousel/>
                    {query768 && <Navigate/>}
                    <Info title={'На этом уроке вы'} data={mock[1]}>
                        <NormalButton onClick={() => {
                        }} w={!query768 ? 300 : '100%'} bc={'rgba(38, 211, 103, 1)'}>
                            <>
                                <DownloadIcon/>
                                Скачать материалы к уроку
                            </>
                        </NormalButton>
                    </Info>
                    <Info title={'Домашнее задание:'} data={mock[2]}>
                        <NormalButton onClick={() => {
                        }} w={!query768 ? 300 : '100%'} bc={'rgba(118, 146, 255, 1)'}>
                            <>
                                <MailIcon/>
                                Связаться с куратором
                            </>
                        </NormalButton>
                    </Info>
                </div>
            </>
        </Wrapper>
    )
};

export default LkStudentCourses;