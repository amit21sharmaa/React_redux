import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { convertStr } from '../utils';

export default function APIDataTable({rows, headers}) {

    return (
    <div>
        {rows?.length >0 ?
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    {headers?.map((header) => (
                    <TableCell align="left">{header}</TableCell>
                    ))}
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    {headers?.map((header) => (
                    <TableCell align="left">
                        {typeof(row[header]) == "object" ? convertStr(row[header]) : row[header]}
                    </TableCell>
                    ))}
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        : null}
    </div>
    );
}
