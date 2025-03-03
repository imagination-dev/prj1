import React from 'react';
import {Box, SwipeableDrawer} from "@mui/material";
import s from './styles.module.css'
import {NavLink} from "react-router";

const HeaderBurgerLeft = ({openMenu, toggleDrawer, type, handleLogout}: any) => {
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
                <NavLink className={s.nav_item} to={'/'}>Мои курсы</NavLink>
                <NavLink className={s.nav_item} to={'/'}>Мои чаты</NavLink>
            </div>
            <div className={s.line}/>
            <div className={s.navigate}>
                <p className={s.nav_item}>Помощь</p>
                <p className={s.nav_item}>Настройки</p>
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