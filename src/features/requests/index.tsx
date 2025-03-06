import Wrapper from "../../common/components/wrapper";
import s from './styles.module.css'
import TitleSupport from "../../common/ui-kit/titleSupport";
import {useMediaQuery} from "@mui/material";
import {v4} from "uuid";
import {useState} from "react";
import ModalChat from "../lkStudentСourses/modalChat";
import TableContent from "./tableContent";
import SwiperContent from "./swiperContent";

export type StatusVariant = 1 | 2 | 3

function createData(
    name: string,
    date: string,
    status: StatusVariant,
    id: string
) {
    return {name, date, status, id, minWidth: 70};
}

const rows = [
    createData('Отключение подписки', '23.10.2023 10:06', 1, v4()),
    createData('Вопросы и претензии', '23.10.2023 10:06', 2, v4()),
    createData('Вопросы и претензии', '23.10.2023 10:06', 3, v4()),
];
type StatusType = Record<StatusVariant, string>

export const status: StatusType = {
    1: "Закрыт",
    2: "Рассматривается",
    3: "Есть ответ",
}

const Requests = () => {
    const query768 = useMediaQuery('(max-width:768px)');
    const [openModal, setOpenModal] = useState<null | string>(null)

    const handleClose = () => setOpenModal(null)
    const handleOpenModal = (title:string) => setOpenModal(title)


    return (
        <Wrapper className={s.wrapper}>
            <div className={s.box}>
                {openModal &&
                    <ModalChat title={openModal} isOpen={Boolean(openModal)} handleClose={handleClose}/>}
                <TitleSupport title={'Мои обращения'}/>

                {!query768 ? <TableContent rows={rows} handleOpenModal={handleOpenModal}/> :
                    <SwiperContent rows={rows} handleOpenModal={handleOpenModal}/>}
            </div>
        </Wrapper>
    );
};

export default Requests;