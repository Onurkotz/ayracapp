import { useState } from "react";
import "./adding.css";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { addThink } from "../../../redux/aboutSlice/aboutSlice";

import ArticleIcon from "@mui/icons-material/Article";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";

function Adding() {
  const dispatch = useDispatch();
  const [think, setThink] = useState("");

  const dark = useSelector((state) => state.dark.checked);
  const english = useSelector((state) => state.languageMode.isEnglish);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (think === "") {
      alert(
        english === false
          ? "Girişler boş bırakılamaz."
          : "The inputs could not be empty."
      );

      return false;
    }

    dispatch(addThink({ id: nanoid(), think }));
    setThink("");
  };

  return (
    <div>
      <div className="main">
        <form onSubmit={handleSubmit}>
          <Input
            sx={
              dark === false
                ? { margin: "15px", width: "600px" }
                : { margin: "15px", width: "600px", color: "white" }
            }
            name="comment"
            value={think}
            placeholder={english === false ? "Not Yaz" : "Write Note"}
            startAdornment={
              <InputAdornment position="start">
                <ArticleIcon
                  sx={dark === false ? "" : { color: "rgb(190, 190, 190)" }}
                />
              </InputAdornment>
            }
            onChange={(e) => setThink(e.target.value)}
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
