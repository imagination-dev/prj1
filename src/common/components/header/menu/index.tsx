import {Menu} from "@mui/material";
import s from './styles.module.css'
import {useNavigate} from "react-router";

interface Interface {
    open: boolean
    handleClose: () => void
    anchorEl: null | HTMLElement
    logout: () => void
    isAdmin: boolean
}

const MenuHeader = ({open, isAdmin, logout, handleClose, anchorEl}: Interface) => {
    const navigate = useNavigate()

    const handleNavigate = (path: string) => {
        navigate(path)
        handleClose()
    }
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
                            padding: '9px 25px !important',
                            borderRadius: '10px',
                            overflow: 'hidden'
                        },
                        overflow: 'hidden',
                        boxShadow: '0px 5px 20px 0px rgba(0, 0, 0, 0.03)',

                        // filter: 'drop-shadow(0px 12px 8px rgba(0, 0, 0, 0.03))',
                        mt: 1.5,
                        maxWidth: '226px',
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
            <p onClick={() => !isAdmin && handleNavigate('/support')} className={s.menu_item}>
                Помощь
            </p>

            <div className={s.line}/>
            {!isAdmin && <p onClick={() => handleNavigate('/profile')} className={s.menu_item}>
                Настройки
            </p>}
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