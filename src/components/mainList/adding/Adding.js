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
  const english = useSelector((state) => state.languageMode.isEnglish);

  const inputSx =
    dark === false
      ? { margin: "15px", width: "300px" }
      : { margin: "15px", width: "300px", color: "white" };

  const space = () => {
    setBookName("");
    setAuthor("");
    setGenre("");
    setPage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (bookName === "" || author === "" || page === "" || genre === "") {
      alert(
        english === false
          ? "Girişler boş bırakılamaz."
          : "The inputs could not be empty."
      );
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
            sx={inputSx}
            name="bookName"
            value={bookName}
            placeholder={english === false ? "Kitap Adı" : "Book Name"}
            startAdornment={
              <InputAdornment position="start">
                <MenuBookTwoToneIcon
                  sx={dark === false ? "" : { color: "rgb(190, 190, 190)" }}
                />
              </InputAdornment>
            }
            onChange={(e) => setBookName(e.target.value)}
          />
          <Input
            sx={inputSx}
            name="author"
            value={author}
            placeholder={english === false ? "Yazar" : "Author"}
            startAdornment={
              <InputAdornment position="start">
                <ModeEditOutlineTwoToneIcon
                  sx={dark === false ? "" : { color: "rgb(190, 190, 190)" }}
                />
              </InputAdornment>
            }
            onChange={(e) => setAuthor(e.target.value)}
          />
          <Input
            sx={inputSx}
            name="genre"
            value={genre}
            placeholder={english === false ? "Tür" : "Genre"}
            startAdornment={
              <InputAdornment position="start">
                <ArticleIcon
                  sx={dark === false ? "" : { color: "rgb(190, 190, 190)" }}
                />
              </InputAdornment>
            }
            onChange={(e) => setGenre(e.target.value)}
          />
          <Input
            sx={inputSx}
            name="page"
            placeholder={english === false ? "Sayfa Sayısı" : "Pages"}
            value={page}
            startAdornment={
              <InputAdornment position="start">
                <Filter4Icon
                  sx={dark === false ? "" : { color: "rgb(190, 190, 190)" }}
                />
              </InputAdornment>
            }
            onChange={(e) => setPage(e.target.value)}
          />
          <button className={dark === false ? "" : "darkButton"}>
            {english === false ? "Ekle" : "Add"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Adding;
