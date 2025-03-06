import s from './styles.module.css'
import Wrapper from "../../common/components/wrapper";
import {NavLink} from "react-router";
import {classNames} from "../../common/utils/classNames.ts";
import {useContext} from "react";
import {AuthContext} from "../../app/App.tsx";
import TitleSupport from "../../common/ui-kit/titleSupport";

const path = [
    {title: "Мои обращения", path: "/requests", count: 3},
    {title: "Частые вопросы", path: "/questions"},
    {title: "Сотрудничество", path: "/cooperation"},
    {title: "Возврат средств", path: "/refund"},
]

const pathUnAuth = [
    {title: "Сотрудничество и предложения", path: "/cooperation"},
    {title: "Другой вопрос", path: "/question"},
]
const Support = () => {
    const {isAuth} = useContext(AuthContext)
    return (
        <Wrapper className={s.wrapper}>
            <div className={s.box}>
                <TitleSupport title={'Выберите подходящий пункт'}/>
                <div className={s.items}>
                    {(isAuth ? path : pathUnAuth).map((el: any, i) => {
                        return <NavLink className={classNames(s.item)} to={el.path} key={i}>
                            {el.title}
                            {el?.count && <p className={s.count}>{el?.count}</p>}
                        </NavLink>
                    })}
                </div>
            </div>
        </Wrapper>
    );
};

export default Support;