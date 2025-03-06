import s from './styles.module.css'
import logo from '../../assets/logo.svg'
import Wrapper from "../wrapper";
import {NavLink, useNavigate} from "react-router";
import React, {useContext, useState} from "react";
import {AuthContext} from "../../../app/App.tsx";
import {Box, useMediaQuery} from "@mui/material";
import MenuHeader from "./menu";
import HeaderBurgerLeft from "../HeaderBurgerLeft";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
// import logoGray from '../../assets/logo_gray.jpg'
import logoGray from '../../assets/logo_gray.svg'
import {classNames} from "../../utils/classNames.ts";
import profileIcon from '../../assets/profile_icon.svg'

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

    const backToLk = () => {
        if (isAuth) {
            navigate('lk_student')
        }
    }

    const toggleDrawerRight = (open: any) => (event: any) => {
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
        <div className={classNames(s.header, openMenu && s.header_open_menu)}>
            <HeaderBurgerLeft handleLogout={handleExit} type={1}
                              toggleDrawer={toggleDrawerRight}
                              openMenu={openMenu}/>
            <Wrapper className={s.wrapper}>
                <>
                    <MenuHeader logout={handleExit} open={open} handleClose={handleClose} anchorEl={anchorEl}/>
                    <div className={s.header_left}>
                        <img onClick={backToLk} src={openMenu ? logoGray : logo} alt="logo"/>

                        <p className={s.title}>Онлайн-школа творческих навыков</p>
                    </div>
                    {isAuth && <div className={s.header_right}>
                        <NavLink to={'lk_student_courses'}>Мои курсы</NavLink>
                        <NavLink className={s.chats} data-count={3} to={'lk_student_chat'}>Мои чаты</NavLink>

                        <Box
                            style={{cursor: 'pointer'}}
                            onClick={!query768 ? handleClick : toggleDrawerRight(!openMenu)}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            {openMenu ? <CloseOutlinedIcon
                                    sx={{height: '36px', width: "36px", color: "rgba(138, 138, 138, 1)"}}/> :
                                <img className={s.profileIcon} src={profileIcon} alt="profileIcon"/>}
                        </Box>
                    </div>}
                </>
            </Wrapper>
        </div>

    );
};

export default Header;