import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import s from "../styles.module.css";
import NormalButton from "../../../common/ui-kit/normalButton";
import {NavLink} from "react-router";

const TableContent = ({rows, headers}: any) => {
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
                            style={{minWidth: 170}} align="center">

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
                                            {row.tariff}
                                        </span>
                            </TableCell>

                            <TableCell align="center">
                                        <span className={s.cell}>
                                            {row.date_pay}
                                        </span>
                            </TableCell>

                            <TableCell align="center">
                                        <span className={s.cell}>
                                            {row.date_activated}
                                        </span>
                            </TableCell>

                            <TableCell align="center">
                                        <span className={s.cell}
                                              style={{
                                                  fontFamily: 'Gilroy-Black,sans-serif',
                                                  color: row.validity_period === 1 ? 'rgba(241, 0, 0, 1)' : 'rgba(38, 211, 103, 1)'
                                              }}>
                                            {
                                                (row.validity_period === 1 && 'Закончился') ||
                                                (row.validity_period === 2 && 'Бесконечный') ||
                                                (row.validity_period)
                                            }
                                        </span>
                            </TableCell>

                            <TableCell align="right">
                                <NavLink to={'/control-cards'} className={s.link}>
                                    <NormalButton onClick={() => {
                                    }} className={s.btn} w={124}
                                                  bc={'rgba(38, 211, 103, 1)'}>
                                        Управление
                                    </NormalButton>
                                </NavLink>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableContent;