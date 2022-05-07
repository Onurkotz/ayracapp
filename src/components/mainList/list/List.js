import React from "react";
import "./list.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "../../../redux/listSlice/listSlice";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";

import { Link } from "react-router-dom";

function List() {
  const items = useSelector((state) => state.bookList.items);
  console.log(items);

  const dispatch = useDispatch();

  const deleteBook = (id) => {
    if (window.confirm("Emin misiniz?")) {
      dispatch(deleteItem(id));
    }
  };

  return (
    <div>
      <TableContainer
        sx={{
          margin: "10px 0px 10px 0px",
          backgroundColor: "rgb(230, 230, 230)",
        }}
      >
        <Table
          sx={{ minWidth: 650, border: "1px solid black" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "rgb(230, 230, 230)",
              }}
            >
              <TableCell sx={{ fontSize: "20px", fontWeight: "bold" }}>
                Kitap Adı
              </TableCell>
              <TableCell
                sx={{ fontSize: "20px", fontWeight: "bold" }}
                align="right"
              >
                Yazar
              </TableCell>
              <TableCell
                sx={{ fontSize: "20px", fontWeight: "bold" }}
                align="right"
              >
                Sayfa Sayısı
              </TableCell>
              <TableCell
                sx={{ fontSize: "20px", fontWeight: "bold" }}
                align="right"
              >
                Tür
              </TableCell>
              <TableCell
                sx={{ fontSize: "20px", fontWeight: "bold" }}
                align="right"
              >
                İlerleme Durmu
              </TableCell>
              <TableCell
                sx={{ fontSize: "20px", fontWeight: "bold" }}
                align="right"
              >
                Sil
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <Link to={`/${item.id}`}>
                  <TableCell component="th" scope="row">
                    {item.bookName}
                  </TableCell>
                </Link>
                <TableCell align="right">{item.author}</TableCell>
                <TableCell align="right">{item.page}</TableCell>
                <TableCell align="right">{item.genre}</TableCell>
                <TableCell align="right">İlerleme Çubuğu</TableCell>
                <TableCell align="right">
                  <DeleteIcon
                    className="delete"
                    onClick={() => deleteBook(item.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default List;
