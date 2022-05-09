import { useState } from "react";
import "./adding.css";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addList } from "../../../redux/listSlice/listSlice";

import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import ModeEditOutlineTwoToneIcon from "@mui/icons-material/ModeEditOutlineTwoTone";
import ArticleIcon from "@mui/icons-material/Article";
import Filter4Icon from "@mui/icons-material/Filter4";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";

function Adding() {
  const dispatch = useDispatch();
  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [page, setPage] = useState("");
  const [genre, setGenre] = useState("");

  const dark = useSelector((state) => state.dark.checked);

  const handleSubmit = (e) => {
    e.preventDefault();

    const space = () => {
      setBookName("");
      setAuthor("");
      setGenre("");
      setPage("");
    };
    if (bookName === "" || author === "" || page === "" || genre === "") {
      alert("Girişler boş bırakılamaz.");
      space();

      return false;
    }

    dispatch(addList({ id: nanoid(), bookName, author, page, genre }));
    space();
  };

  return (
    <div>
      <div className="main">
        <form onSubmit={handleSubmit}>
          <Input
            sx={dark === false ? { margin: "15px", width: "300px" }: {margin: "15px", width: "300px", color: "white"}}
            name="bookName"
            value={bookName}
            placeholder="Kitap Adı"
            startAdornment={
              <InputAdornment position="start">
                <MenuBookTwoToneIcon sx={dark === false ? "" : { color: "rgb(190, 190, 190)"}} />
              </InputAdornment>
            }
            onChange={(e) => setBookName(e.target.value)}
          />
          <Input
            sx={dark === false ? { margin: "15px", width: "300px" }: {margin: "15px", width: "300px", color: "white"}}
            name="author"
            value={author}
            placeholder="Yazar"
            startAdornment={
              <InputAdornment position="start">
                <ModeEditOutlineTwoToneIcon sx={dark === false ? "" : { color: "rgb(190, 190, 190)"}} />
              </InputAdornment>
            }
            onChange={(e) => setAuthor(e.target.value)}
          />
          <Input
            sx={dark === false ? { margin: "15px", width: "300px" }: {margin: "15px", width: "300px", color: "white"}}
            name="genre"
            value={genre}
            placeholder="Tür"
            startAdornment={
              <InputAdornment position="start">
                <ArticleIcon sx={dark === false ? "" : { color: "rgb(190, 190, 190)"}} />
              </InputAdornment>
            }
            onChange={(e) => setGenre(e.target.value)}
          />
          <Input
            sx={dark === false ? { margin: "15px", width: "300px" }: {margin: "15px", width: "300px", color: "white"}}
            name="page"
            placeholder="Sayfa Sayısı"
            value={page}
            startAdornment={
              <InputAdornment position="start">
                <Filter4Icon sx={dark === false ? "" : { color: "rgb(190, 190, 190)"}} />
              </InputAdornment>
            }
            onChange={(e) => setPage(e.target.value)}
          />
          <button className={dark === false ? "" : "darkButton"}>Ekle</button>
        </form>
      </div>
    </div>
  );
}

export default Adding;
