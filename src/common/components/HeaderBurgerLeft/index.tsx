import React from 'react';
import {Box, ListItem, ListItemButton, ListItemText, SwipeableDrawer} from "@mui/material";
import s from './styles.module.css'
import {NavLink} from "react-router";

const HeaderBurgerLeft = ({openMenu, toggleDrawer, type, handleLogout}: any) => {
    const iOS =
        typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const list = () => (
        <Box
            sx={{minWidth: 250, width: 'fit-content', minHeight: 'calc(100% - 52px)'}}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >


            {[
                {path: '/', title: "Мои курсы"},
                {path: '/', title: "Мои чаты"},

            ].map((text, index) => (
                <NavLink to={text.path} key={index} style={{textDecoration: "none"}}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText sx={{color: 'rgba(42, 42, 44, 1)'}}
                                          primary={text.title}/>
                        </ListItemButton>
                    </ListItem>
                </NavLink>
            ))}
            <ListItem disablePadding>
                <ListItemButton onClick={handleLogout}>
                    <ListItemText primary={'Выход'}/>
                </ListItemButton>
            </ListItem>


        </Box>

    );

    return (
        <React.Fragment>
            <SwipeableDrawer
                sx={{
                    top: '52px',

                    '& .MuiBackdrop-root': {
                        marginTop: '52px'
                    },
                    '& .MuiPaper-root': {
                        marginTop: '52px',
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