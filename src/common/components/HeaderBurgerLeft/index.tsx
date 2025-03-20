import React from 'react';
import {Box, Drawer} from "@mui/material";
import s from './styles.module.css'
import {NavLink} from "react-router";
import CloseModalButton from "../closeButtonModal";
import {classNames} from "../../utils/classNames.ts";
import CircleCount from "../circleCount";

const HeaderBurgerLeft = ({isAdmin, openMenu, toggleDrawer, handleLogout}: any) => {
    const list = () => (
        <Box
            sx={{
                width: '100vw',
                height: 'calc(100dvh - 103px)',
                display: "flex",
                flexDirection: 'column',
                paddingLeft: '30px',
                paddingRight: '30px',
                position: "relative"
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >

            <div className={s.navigate}>
                {!isAdmin && <NavLink className={s.nav_item} to={'lk_student_courses'}>Мои курсы</NavLink>}
                <NavLink className={classNames(s.nav_item, s.nav_item_circle)}
                         to={isAdmin ? '/admin/panel' : 'lk_student_chat'}>
                    <p style={{position: 'relative'}}>
                        Мои чаты
                        <CircleCount value={3} right={-25}/>
                    </p>
                </NavLink>
            </div>
            <div className={s.line}/>
            <div className={s.navigate}>
                <NavLink to={isAdmin ? '/' : 'support'} className={s.nav_item}>Помощь</NavLink>
                {!isAdmin && <NavLink to={'profile'} className={s.nav_item}>Настройки</NavLink>}
                <p className={classNames(s.nav_item, s.nav_item_logout)} onClick={handleLogout}>Выйти</p>
            </div>


        </Box>

    );

    return (
        <React.Fragment>
            <Drawer

                sx={{
                    '& .MuiBackdrop-root': {
                        backgroundColor: 'rgba(217, 217, 217, 0.9)'
                    },
                    '& .MuiPaper-root': {
                        borderRadius: "30px 30px 0 0",
                        overflowY: "unset",
                        // marginTop: '60px',
                        boxShadow: 'none',
                        touchAction: 'pan-y',
                        WebkitOverflowScrolling: 'touch',
                    },
                }}

                anchor={'bottom'}
                open={openMenu}

                onClose={toggleDrawer(false)}

            >
                <CloseModalButton handleClose={toggleDrawer(false)}/>
                {list()}
            </Drawer>
        </React.Fragment>
    );
};

export default HeaderBurgerLeft;