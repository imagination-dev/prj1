import s from './styles.module.css'
import logo from '../../assets/logo.svg'
import Wrapper from "../wrapper";

const Header = () => {
    return (
        <div className={s.header}>
            <Wrapper className={s.wrapper}>
                <div className={s.header_left}>
                    <img src={logo} alt="logo"/>

                    <p className={s.title}>Онлайн-школа творческих навыков</p>
                </div>
            </Wrapper>
        </div>

    );
};

export default Header;