import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import s from "../styles.module.css";
import NormalButton from "../../../common/ui-kit/normalButton";
import Icon1 from '../../../common/assets/requestsTable/icon_1.svg?react'
import Icon2 from '../../../common/assets/requestsTable/icon_2.svg?react'
import Icon3 from '../../../common/assets/requestsTable/icon_3.svg?react'
import {status, StatusVariant} from "../index.tsx";


const TableContent = ({rows, handleOpenModal}: any) => {


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
                        <TableCell
                            style={{
                                maxWidth: 240,
                                minWidth: 240,
                                width: 240,
                            }}
                            align="center">
                            <div className={s.icon}>
                                <Icon1/>
                            </div>
                            Обращение</TableCell>
                        <TableCell

                            style={{minWidth: 190}} align="center">

                            <div className={s.icon}>
                                <Icon2/>
                            </div>
                            Дата обращения
                        </TableCell>
                        <TableCell
                            style={{minWidth: 170}}
                            align="center">

                            <div className={s.icon}>
                                <Icon3/>
                            </div>
                            Статус</TableCell>
                        <TableCell

                            style={{minWidth: 170}} align="right"></TableCell>
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
                                        {row.name}
                                         </span>
                            </TableCell>
                            <TableCell align="center">
                                        <span className={s.cell}>
                                            {row.date}
                                        </span>
                            </TableCell>
                            <TableCell align="center">
                                          <span className={s.cell} style={{
                                              fontFamily: row.status === 3 ? 'Gilroy-Black,sans-serif' : 'Gilroy-Regular, sans-serif',
                                              color:
                                                  (row.status === 2 && 'rgba(118, 146, 255, 1)') ||
                                                  (row.status === 3 && 'rgba(38, 211, 103, 1)') ||
                                                  'rgba(42, 42, 44, 1)'
                                          }}>
                                        {status[row.status as StatusVariant]}
                                          </span>
                            </TableCell>
                            <TableCell align="center">
                                <NormalButton className={s.btn} onClick={() => handleOpenModal(row.name)} w={110}
                                              bc={'rgba(38, 211, 103, 1)'}>
                                    Открыть
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