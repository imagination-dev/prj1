export const style = ({width = 390}) => {
    return {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: width,
        bgcolor: 'background.paper',
        borderRadius: '20px',
        padding: '35px',
        '@media screen and (max-width: 768px)': {
            width: `calc(100% - 60px)`,
            padding: '35px 20px',
        }
    }
};
