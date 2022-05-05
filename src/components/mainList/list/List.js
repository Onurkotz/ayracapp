import React from "react";
import "./list.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24),
  createData("Ice cream sandwich", 237, 9.0, 37),
  createData("Eclair", 262, 16.0, 24),
  createData("Cupcake", 305, 3.7, 67),
  createData("Gingerbread", 356, 16.0, 49),
];

function List() {
  return (
    <div>
      <TableContainer component={Paper} sx={{margin: "10px 0px 10px 0px", backgroundColor: "rgb(243, 243, 243)"}}>
        <Table sx={{ minWidth: 650, border: "1px solid black"}} aria-label="simple table">
          <TableHead>
            <TableRow sx={{backgroundColor: "rgb(243, 243, 243)",}}>
              <TableCell sx={{fontSize: "20px", fontWeight: "bold"}} >Kitap Adı</TableCell>
              <TableCell sx={{fontSize: "20px", fontWeight: "bold"}} align="right">Yazar</TableCell>
              <TableCell sx={{fontSize: "20px", fontWeight: "bold"}} align="right">Sayfa</TableCell>
              <TableCell sx={{fontSize: "20px", fontWeight: "bold"}} align="right">İlerleme</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default List;
