import React from "react";
import "./list.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "../../../redux/listSlice/listSlice";

//import ProgressBar from "./progressbar/Progress";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";

//import { Link } from "react-router-dom";

function List() {
  const darkMode = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "rgb(190, 190, 190)",
  };
  const ligthMode = { fontSize: "20px", fontWeight: "bold" };

  const items = useSelector((state) => state.bookList.items);
  const dark = useSelector((state) => state.dark.checked);
  const english = useSelector((state) => state.languageMode.isEnglish);

  const tableCellsx = dark === false ? "" : { color: "rgb(190, 190, 190)" };
  const tableHeadCellsx = dark === false ? ligthMode : darkMode;

  const dispatch = useDispatch();

  const deleteBook = (id) => {
    if (window.confirm(english === false ? "Emin misniz?" : "Are you sure?")) {
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
                maxHeight: 245,
              }
            : {
                margin: "10px 0px 10px 0px",
                backgroundColor: "rgb(110, 110, 110)",
                maxHeight: 245,
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
              <TableCell sx={tableHeadCellsx}>
                {english === false ? "Kitap Adı" : "Book Name"}
              </TableCell>
              <TableCell sx={tableHeadCellsx} align="left">
                {english === false ? "Yazar" : "Author"}
              </TableCell>
              <TableCell sx={tableHeadCellsx} align="center">
                {english === false ? "Tür" : "Genre"}
              </TableCell>
              <TableCell sx={tableHeadCellsx} align="center">
                {english === false ? "Sayfa Sayısı" : "Pages"}
              </TableCell>
              {/* <TableCell sx={tableHeadCellsx} align="right">
                {english === false ? "İlerleme Durumu" : "Progress Status"}
              </TableCell> */}
              <TableCell sx={tableHeadCellsx} align="right">
                {english === false ? "Sil" : "Delete"}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={tableCellsx} component="th" scope="row">
                  {item.bookName}
                </TableCell>

                <TableCell sx={tableCellsx} align="left">
                  {item.author}
                </TableCell>
                <TableCell sx={tableCellsx} align="center">
                  {item.genre}
                </TableCell>
                <TableCell sx={tableCellsx} align="center">
                  {item.page}
                </TableCell>
                {/* <TableCell align="right">
                  <ProgressBar readed={15} page={650} />
                </TableCell> */}
                <TableCell align="right">
                  <DeleteIcon
                    sx={dark === false ? { color: "red" } : { color: "purple" }}
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

/*




<Link
                    className={dark === false ? "" : "darka"}
                    to={`/think/${item.id}`}
                  >

</Link>

*/
