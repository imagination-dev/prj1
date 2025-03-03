import s from './styles.module.css'
import logo from '../../assets/logo.svg'
import Wrapper from "../wrapper";
import {NavLink, useNavigate} from "react-router";
import React, {useContext, useState} from "react";
import {AuthContext} from "../../../app/App.tsx";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {IconButton, useMediaQuery} from "@mui/material";
import MenuHeader from "./menu";
import HeaderBurgerLeft from "../HeaderBurgerLeft";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Header = () => {
    const query768 = useMediaQuery('(max-width:768px)');

    const navigate = useNavigate()
    const {isAuth, exit} = useContext(AuthContext)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [openMenu, setOpenMenu] = useState(false);


    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleExit = () => {
        exit()
        navigate('login')
    }

    const toggleDrawerRight = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setOpenMenu(open);
    };

    return (
        <div className={s.header}>
            <HeaderBurgerLeft handleLogout={handleExit} type={1}
                              toggleDrawer={toggleDrawerRight}
                              openMenu={openMenu}/>
            <Wrapper className={s.wrapper}>
                <>
                    <MenuHeader logout={handleExit} open={open} handleClose={handleClose} anchorEl={anchorEl}/>
                    <div className={s.header_left}>
                        <img src={logo} alt="logo"/>

                        <p className={s.title}>Онлайн-школа творческих навыков</p>
                    </div>
                    {isAuth && <div className={s.header_right}>
                        <NavLink to={'curses'}>Мои курсы</NavLink>
                        <NavLink className={s.chats} data-count={3} to={'curses'}>Мои чаты</NavLink>

                        <IconButton
                            onClick={!query768 ? handleClick : toggleDrawerRight(!openMenu)}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            {openMenu ? <CloseOutlinedIcon
                                    sx={{height: '36px', width: "36px", color: "rgba(138, 138, 138, 1)"}}/> :
                                <AccountCircleOutlinedIcon
                                    sx={{height: '36px', width: "36px", color: "rgba(138, 138, 138, 1)"}}/>}
                        </IconButton>
                    </div>}
                </>
            </Wrapper>
        </div>

    );
};

export default Header;