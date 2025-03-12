import React from 'react';
import {Box, SwipeableDrawer} from "@mui/material";
import s from './styles.module.css'
import {NavLink} from "react-router";

const HeaderBurgerLeft = ({isAdmin, openMenu, toggleDrawer, type, handleLogout}: any) => {
    const iOS =
        typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const list = () => (
        <Box
            sx={{
                width: '100vw',
                minHeight: 'calc(100% - 60px)',
                display: "flex",
                flexDirection: 'column',
                paddingLeft: '30px',
                paddingRight: '30px',
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <div className={s.line}/>
            <div className={s.navigate}>
                {!isAdmin && <NavLink className={s.nav_item} to={'lk_student_courses'}>Мои курсы</NavLink>}
                <NavLink className={s.nav_item} to={isAdmin ? '/admin/panel' : 'lk_student_chat'}>Мои чаты</NavLink>
            </div>
            <div className={s.line}/>
            <div className={s.navigate}>
                <NavLink to={isAdmin ? '/' : 'support'} className={s.nav_item}>Помощь</NavLink>
                {!isAdmin && <NavLink to={'profile'} className={s.nav_item}>Настройки</NavLink>}
                <p className={s.nav_item} onClick={handleLogout}>Выйти</p>
            </div>


        </Box>

    );

    return (
        <React.Fragment>
            <SwipeableDrawer
                sx={{
                    top: '60px',

                    '& .MuiBackdrop-root': {
                        marginTop: '60px',
                        backgroundColor: 'rgba(217, 217, 217, 0.79)'
                    },
                    '& .MuiPaper-root': {
                        marginTop: '60px',
                        boxShadow: 'none'
                    },
                }}
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                anchor={type === 1 ? 'right' : 'left'}
                open={openMenu}
                disableSwipeToOpen={true}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                {list()}
            </SwipeableDrawer>
        </React.Fragment>
    );
};

export default HeaderBurgerLeft;