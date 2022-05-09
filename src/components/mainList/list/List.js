import React from "react";
import "./list.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "../../../redux/listSlice/listSlice";

import ProgressBar from "./progressbar/ProgressBar";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";

import { Link } from "react-router-dom";

function List() {
  const darkMode = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "rgb(190, 190, 190)",
  };
  const ligthMode = { fontSize: "20px", fontWeight: "bold" };

  const items = useSelector((state) => state.bookList.items);

  const dark = useSelector((state) => state.dark.checked);

  const dispatch = useDispatch();

  const deleteBook = (id) => {
    if (window.confirm("Emin misiniz?")) {
      dispatch(deleteItem(id));
    }
  };

  return (
    <div>
      <TableContainer
        sx={
          dark === false
            ? {
                margin: "10px 0px 10px 0px",
                backgroundColor: "rgb(230, 230, 230)",
              }
            : {
                margin: "10px 0px 10px 0px",
                backgroundColor: "rgb(110, 110, 110)",
              }
        }
      >
        <Table
          sx={{
            minWidth: 650,
            border: "1px solid black",
            borderTop: "2px solid black",
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow
              sx={
                dark === false
                  ? {
                      backgroundColor: "rgb(230, 230, 230)",
                    }
                  : {
                      backgroundColor: "rgb(110, 110, 110)",
                    }
              }
            >
              <TableCell sx={dark === false ? ligthMode : darkMode}>
                Kitap Adı
              </TableCell>
              <TableCell
                sx={dark === false ? ligthMode : darkMode}
                align="right"
              >
                Yazar
              </TableCell>
              <TableCell
                sx={dark === false ? ligthMode : darkMode}
                align="right"
              >
                Sayfa Sayısı
              </TableCell>
              <TableCell
                sx={dark === false ? ligthMode : darkMode}
                align="right"
              >
                Tür
              </TableCell>
              <TableCell
                sx={dark === false ? ligthMode : darkMode}
                align="right"
              >
                İlerleme Durmu
              </TableCell>
              <TableCell
                sx={dark === false ? ligthMode : darkMode}
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
                <TableCell component="th" scope="row">
                  <Link className={dark === false ? "" : "darka"} to={`/think/${item.id}`}>{item.bookName}</Link>
                </TableCell>

                <TableCell
                  sx={dark === false ? "" : { color: "rgb(190, 190, 190)" }}
                  align="right"
                >
                  {item.author}
                </TableCell>
                <TableCell
                  sx={dark === false ? "" : { color: "rgb(190, 190, 190)" }}
                  align="right"
                >
                  {item.page}
                </TableCell>
                <TableCell
                  sx={dark === false ? "" : { color: "rgb(190, 190, 190)" }}
                  align="right"
                >
                  {item.genre}
                </TableCell>
                <TableCell align="right">
                  <ProgressBar readed="165" page={item.page} />
                </TableCell>
                <TableCell align="right">
                  <DeleteIcon
                    sx={dark === false ?{ color: "red" } : {color: "purple"}}
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
