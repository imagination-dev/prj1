import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import s from "../styles.module.css";
import NormalButton from "../../../common/ui-kit/normalButton";

const TableContent = ({rows, headers, handleOpenModal}: any) => {
    return (
        <TableContainer sx={{
            boxShadow: 'none'
        }} component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead sx={{
                    '& .MuiTableRow-root': {
                        '& .MuiTableCell-root': {
                            fontFamily: 'Gilroy-Black, sans-serif',
                            fontWeight: 400,
                            fontSize: '15px',
                            lineHeight: '20px',
                            color: 'rgba(42, 42, 44, 1)',
                            borderBottom: "1px solid rgba(0, 0, 0, 1)"
                        }
                    }
                }}>
                    <TableRow>
                        {headers.map((el: any, i: number) => <TableCell
                            key={i}
                            style={el.width ? {
                                maxWidth: 170,
                                minWidth: 170,
                                width: 170,
                            } : {
                                minWidth: 170,
                            }}
                            align={el.align ? el.align : 'center'}>

                            <div className={s.icon}>
                                {el.icon}
                            </div>
                            {el.title}
                        </TableCell>)}
                    </TableRow>
                </TableHead>

                <TableBody>
                    {rows.map((row: any) => (
                        <TableRow
                            style={{minWidth: row.minWidth}}
                            key={row.id}
                            sx={{
                                '& .MuiTableCell-root': {
                                    padding: '13px 16px'
                                },

                                '&:last-child td, &:last-child th': {border: 0},
                            }}
                        >
                            <TableCell align="center">
                                        <span className={s.cell}>
                                            {row.product}
                                        </span>
                            </TableCell>

                            <TableCell align="center">
                                        <span className={s.cell}>
                                            {row.card_icon &&
                                                <img className={s.card_icon} src={row.card_icon} alt="card"/>}
                                            {row.method}
                                        </span>
                            </TableCell>

                            <TableCell align="center">
                                        <span className={s.cell}>
                                            {row.date}
                                        </span>
                            </TableCell>

                            <TableCell align="right">
                                <NormalButton onClick={row.status === 1 ? handleOpenModal : undefined} className={s.btn}
                                              w={124}
                                              bc={row.status === 2 ? 'rgba(38, 211, 103, 1)' : 'rgba(0, 0, 0, 1)'}>
                                    {row.status === 2 ? 'Привязать' : 'Отвязать'}
                                </NormalButton>

                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableContent;