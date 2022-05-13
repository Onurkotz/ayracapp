import React from "react";
import "./list.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteGoal } from "../../../redux/goalSlice/goalSlice";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";

function List() {
  const items = useSelector((state) => state.myGoals.items);
  const dark = useSelector((state) => state.dark.checked);
  const english = useSelector((state) => state.languageMode.isEnglish);

  const darkMode = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "rgb(190, 190, 190)",
  };
  const ligthMode = { fontSize: "20px", fontWeight: "bold" };
  const tableCellsx = dark === false ? ligthMode : darkMode;
  const tableCellMapsx = dark === false ? "" : { color: "rgb(190, 190, 190)" };

  const dispatch = useDispatch();

  const deleteBook = (id) => {
    if (window.confirm(english === false ? "Emin misniz?" : "Are you sure?")) {
      dispatch(deleteGoal(id));
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
              <TableCell sx={tableCellsx}>
                {english === false ? "Kitap Adı" : "Book Name"}
              </TableCell>
              <TableCell sx={tableCellsx} align="left">
                {english === false ? "Yazar" : "Author"}
              </TableCell>
              <TableCell sx={tableCellsx} align="right">
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
                <TableCell sx={tableCellMapsx} component="th" scope="row">
                  {item.goalName}
                </TableCell>

                <TableCell sx={tableCellMapsx} align="left">
                  {item.goalAuthor}
                </TableCell>

                <TableCell sx={tableCellMapsx} align="right">
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
