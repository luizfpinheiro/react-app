import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function createData(username, name, sex, address, mail, birthdate) {
  return { username, name, sex, address, mail, birthdate };
}

const rows = [
  createData("parkerelizabeth", "Richard James", "M",
    "588 Nguyen Drives Apt. 198\nSwansonland, MT 04702", "ssmith@yahoo.com", "1979-10-28"),
  createData("parkerelizabeth", "Richard James", "M",
    "588 Nguyen Drives Apt. 198\nSwansonland, MT 04702", "ssmith@yahoo.com", "1979-10-28"),
  createData("parkerelizabeth", "Richard James", "M",
    "588 Nguyen Drives Apt. 198\nSwansonland, MT 04702", "ssmith@yahoo.com", "1979-10-28"),
];

export default function Users() {
  return (
    <TableContainer component={Paper}>
      <h1>Users</h1>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Sex</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">mail</TableCell>
            <TableCell align="right">Birthdate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.username}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.sex}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.mail}</TableCell>
              <TableCell align="right">{row.birthdate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

}
