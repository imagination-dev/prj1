import s from './styles.module.css'
import Wrapper from "../../common/components/wrapper";
import {NavLink} from "react-router";
import TitleSupport from "../../common/ui-kit/titleSupport";
import React from "react";
import ArrowIcon from '../../common/assets/arrow_subscribe.svg?react'

const data = [
    {text: <p className={s.title}>Перейдите в настройки</p>},
    {text: <p className={s.title}>Нажмите на кнопку <br/> <NavLink to={''}>Управление доступами</NavLink></p>},
    {text: <p className={s.title}>Выберите нужный курс и нажмите «Управление» </p>},
    {text: <p className={s.title}>Если вы хотите отключить подписку, нажмите "Отвязать" и подтвердите действие</p>},
    {text: <p className={s.title}>Для возобновления доступа к урокам нажмите «Привязать» и подтвердите действие</p>},
]

const SubscriptionAction = () => {
    return (
        <Wrapper className={s.wrapper}>
            <div className={s.box}>
                <div className={s.header}>
                    <TitleSupport title={'Отключение/продление подписки'}/>
                    <p className={s.sub_title}>Для отключения или продления подписки:</p>
                </div>

                <div className={s.items}>
                    {data.map((el, i) => {
                        return <React.Fragment key={i}>
                            <div data-count={i + 1} className={s.item}>
                                {el.text}
                            </div>
                            {i !== data.length - 1 &&
                                <div className={s.arrow}>
                                    <ArrowIcon/>
                                </div>
                            }
                        </React.Fragment>
                    })}
                </div>
            </div>
        </Wrapper>
    );
};

export default SubscriptionAction;