import s from './styles.module.css'
import Wrapper from "../wrapper";
import logo from '../../assets/logo_footer.svg'
// import {NavLink} from "react-router";
// import {useContext} from "react";
// import {AuthContext} from "../../../app/App.tsx";

// const navigate = [
//     {title: "Главная", path: "/", id: 1},
//     {title: "Все курсы", path: "/", id: 2},
//     {title: "Помощь", path: "support", id: 3},
// ]

const Footer = () => {
    // const {isAdmin} = useContext(AuthContext)

    return (
        <Wrapper className={s.wrapper}>
            <>
                <div className={s.footer_left}>
                    <div className={s.footer_left_info}>
                        <img src={logo} alt="logo"/>
                        <p className={s.description}>2016-2020, Imagination, все права защищены</p>
                    </div>
                    {/*{!isAdmin && <div className={s.navigate}>*/}
                    {/*    {navigate.map((el) => <NavLink key={el.id} to={el.path}>{el.title}</NavLink>)}*/}
                    {/*</div>}*/}
                </div>
                <div className={s.root}>
                    <a href="/">Политика конфиденциальности</a>
                    <a href="/">Договор оферты</a>
                    <p className={s.description_mobile}>2016-2020, Imagination, все права защищены</p>
                </div>
            </>
        </Wrapper>

    );
};

export default Footer;