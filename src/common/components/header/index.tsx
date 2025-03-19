import s from './styles.module.css'
import logo from '../../assets/logo.svg'
import Wrapper from "../wrapper";
import {NavLink, useNavigate} from "react-router";
import React, {useContext, useState} from "react";
import {AuthContext} from "../../../app/App.tsx";
import {Box, useMediaQuery} from "@mui/material";
import MenuHeader from "./menu";
import HeaderBurgerLeft from "../HeaderBurgerLeft";
import {classNames} from "../../utils/classNames.ts";
import ProfileIcon from '../../assets/profile_icon.svg?react'
import CircleCount from "../circleCount";

const Header = () => {
    const query768 = useMediaQuery('(max-width:768px)');

    const navigate = useNavigate()
    const {isAuth, exit, isAdmin} = useContext(AuthContext)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [openMenu, setOpenMenu] = useState(false);


    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation()
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleExit = () => {
        exit()
    }

    const backToLk = () => {
        if (isAuth && !isAdmin) {
            navigate('lk_student')
        }
    }

    const toggleDrawerRight = (open: any) => (event: any) => {
        event.stopPropagation()
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
        <div className={classNames(s.header)}>
            <HeaderBurgerLeft isAdmin={isAdmin} handleLogout={handleExit} type={1}
                              toggleDrawer={toggleDrawerRight}
                              openMenu={openMenu}/>
            <Wrapper className={s.wrapper}>
                <>
                    <MenuHeader isAdmin={isAdmin} logout={handleExit} open={open} handleClose={handleClose}
                                anchorEl={anchorEl}/>
                    <div className={s.header_left}>
                        <img onClick={backToLk} src={logo} alt="logo"/>

                        <p className={s.title}>Онлайн-школа творческих навыков</p>
                    </div>
                    {isAuth && <div className={s.header_right}>
                        {!isAdmin && <NavLink to={'lk_student_courses'}>Мои курсы</NavLink>}
                        <NavLink className={s.chats} to={isAdmin ? '/admin/panel' : 'lk_student_chat'}>Мои
                            чаты <CircleCount value={3} right={-25}/></NavLink>

                        <Box
                            style={{cursor: 'pointer'}}
                            onClick={!query768 ? handleClick : toggleDrawerRight(!openMenu)}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <div className={s.profileIcon}>
                                {query768 && <CircleCount value={3} left={-11} top={-4}/>}
                                <ProfileIcon/>
                            </div>

                        </Box>
                    </div>}
                </>
            </Wrapper>
        </div>

    );
};

export default Header;