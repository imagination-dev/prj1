import {Menu} from "@mui/material";
import s from './styles.module.css'

interface Interface {
    open: boolean
    handleClose: () => void
    anchorEl: null | HTMLElement
    logout: () => void
}

const MenuHeader = ({open, logout, handleClose, anchorEl}: Interface) => {
    return (
        <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            slotProps={{
                paper: {

                    elevation: 0,
                    sx: {
                        '& .MuiList-root': {
                            paddingTop: '0px',
                            paddingBottom: '0px',
                        },
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 12px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        maxWidth: '225px',
                        width: '100%',
                        borderRadius: "10px !important",

                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                },
            }}
            transformOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
        >
            <p onClick={handleClose} className={s.menu_item}>
                Помощь
            </p>

            <div className={s.line}/>
            <p onClick={handleClose} className={s.menu_item}>
                Настройки
            </p>
            <div className={s.line}/>
            <p onClick={logout} className={s.menu_item} style={{
                color: '#9f4444'
            }}>
                Выйти
            </p>

        </Menu>
    );
};

export default MenuHeader;