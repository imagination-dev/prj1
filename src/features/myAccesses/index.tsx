import s from './styles.module.css'
import Wrapper from "../../common/components/wrapper";
import TitleSupport from "../../common/ui-kit/titleSupport";
import Icon1 from '../../common/assets/myAccessesTable/icon_1.svg?react'
import Icon2 from '../../common/assets/myAccessesTable/icon_2.svg?react'
import Icon3 from '../../common/assets/myAccessesTable/icon_3.svg?react'
import Icon4 from '../../common/assets/myAccessesTable/icon_4.svg?react'
import Icon5 from '../../common/assets/myAccessesTable/icon_5.svg?react'
import {v4} from "uuid";
import {useMediaQuery} from "@mui/material";
import TableContent from "./tableContent";
import SwiperContent from "./swiperContent";


function createData(
    product: string,
    tariff: string,
    date_pay: string,
    date_activated: string,
    validity_period: string | number,
) {
    return {product, tariff, date_pay, date_activated, validity_period, id: v4(), minWidth: 70};
}

const rows = [
    createData('Каллиграфия', 'Полный доступ (25%)', '23.10.2023 10:06', '23.10.2023 10:06', 2),
    createData('Каллиграфия', 'Полный доступ (25%)', '23.10.2023 10:06', '23.10.2023 10:06', 1),
    createData('Каллиграфия', 'Полный доступ (25%)', '23.10.2023 10:06', '23.10.2023 10:06', 'до 23.10.2024'),
];

const headers = [
    {title: "Продукт", icon: <Icon1/>},
    {title: "Тариф", icon: <Icon2/>},
    {title: "Дата оплаты", icon: <Icon3/>},
    {title: "Дата активации", icon: <Icon4/>},
    {title: "Срок действия", icon: <Icon5/>},
    {title: ""},
]

const MyAccesses = () => {
    const query768 = useMediaQuery('(max-width:768px)');

    let title = 'Мои доступы'

    if (query768) title += ` (${rows.length})`
    return (
        <Wrapper className={s.wrapper}>
            <div className={s.box}>
                <div className={s.title}>
                    <TitleSupport title={title} align={query768 ? 'left' : 'center'}/>
                </div>
                {query768 ?
                    <SwiperContent rows={rows} headers={headers}/> :
                    <TableContent headers={headers} rows={rows}/>}
            </div>
        </Wrapper>
    )
        ;
};

export default MyAccesses;