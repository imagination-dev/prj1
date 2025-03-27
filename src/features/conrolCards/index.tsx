import s from './styles.module.css'
import Wrapper from "../../common/components/wrapper";
import TitleSupport from "../../common/ui-kit/titleSupport";
// import Icon1 from '../../common/assets/controlCardsTable/icon_1.svg?react'
import Icon2 from '../../common/assets/controlCardsTable/icon_2.svg?react'
import Icon3 from '../../common/assets/controlCardsTable/icon_3.svg?react'
import Icon4 from '../../common/assets/controlCardsTable/icon_4.svg?react'
import {v4} from "uuid";
import {useMediaQuery} from "@mui/material";
import TableContent from "./tableContent";
import SwiperContent from "./swiperContent";
import mir from '../../common/assets/cardsIcon/mir.png'
import sberIcon from '../../common/assets/cardsIcon/sber.svg'
import ModalConfirm from "./modalConfirm";
import {useState} from "react";

function createData(
    product: string,
    method: string | null,
    date: string,
    status: number,
    card_icon?: string,
    bank_icon?: any,
) {
    return {product, method, date, status, card_icon, bank_icon, id: v4(), minWidth: 70};
}

const rows = [
    createData('Каллиграфия', '220220***0869 | 10/2027', '23.10.2023 10:06', 1, mir, sberIcon),
    createData('Каллиграфия', null, '23.10.2023 10:06', 2),
    createData('Каллиграфия', null, '23.10.2023 10:06', 2),
];

const headers = [
    // {title: "Продукт", icon: <Icon1/>, width: '170px', align: 'center'},
    {title: "Метод привязки", icon: <Icon2/>, align: 'center'},
    {title: "Дата отвязки", icon: <Icon3/>, align: 'center'},
    {title: "Статус привязки", icon: <Icon4/>, align: 'center'},
]

const ControlCards = () => {
    const query768 = useMediaQuery('(max-width:768px)');
    const [isOpenModal, setIsOpenModal] = useState(false)

    const handleOpenModal = () => setIsOpenModal(true)
    const handleCloseModal = () => setIsOpenModal(false)

    let title = 'Управление связанными картами'
    if (query768) title += ` (${rows.length})`

    return (
        <Wrapper className={s.wrapper}>

            <div className={s.box}>
                {isOpenModal && <ModalConfirm handleClose={handleCloseModal} open={isOpenModal}/>}
                <div className={s.main_title}>
                    <TitleSupport title={title} align={'center'}/>
                </div>
                {query768 ?
                    <SwiperContent rows={rows} handleOpenModal={handleOpenModal} headers={headers}/> :
                    <TableContent headers={headers} handleOpenModal={handleOpenModal} rows={rows}/>}
            </div>
        </Wrapper>
    )
        ;
};

export default ControlCards;