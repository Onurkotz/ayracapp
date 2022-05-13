import { useState } from "react";
import "./adding.css";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addGoal } from "../../../redux/goalSlice/goalSlice";

import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import ModeEditOutlineTwoToneIcon from "@mui/icons-material/ModeEditOutlineTwoTone";

import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";

function Adding() {
  const dispatch = useDispatch();
  const [goalName, setGoalName] = useState("");
  const [goalAuthor, setGoalAuthor] = useState("");
  const dark = useSelector((state) => state.dark.checked);
  const english = useSelector((state) => state.languageMode.isEnglish);

  const inputSx =
    dark === false
      ? { margin: "15px", width: "600px" }
      : { margin: "15px", width: "600px", color: "white" };

  const space = () => {
    setGoalName("");
    setGoalAuthor("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (goalName === "" || goalAuthor === "") {
      alert(
        english === false
          ? "Girişler boş bırakılamaz."
          : "The input could not be empty."
      );
      space();

      return false;
    }

    dispatch(addGoal({ id: nanoid(), goalName, goalAuthor }));
    space();
  };

  return (
    <div>
      <div className="main">
        <form onSubmit={handleSubmit}>
          <Input
            sx={inputSx}
            name="goalName"
            value={goalName}
            placeholder={english === false ? "Kitap Adı" : "Book Name"}
            startAdornment={
              <InputAdornment position="start">
                <MenuBookTwoToneIcon
                  sx={dark === false ? "" : { color: "rgb(190, 190, 190)" }}
                />
              </InputAdornment>
            }
            onChange={(e) => setGoalName(e.target.value)}
          />
          <Input
            sx={inputSx}
            name="goalAuthor"
            value={goalAuthor}
            placeholder={english === false ? "Yazar" : "Author"}
            startAdornment={
              <InputAdornment position="start">
                <ModeEditOutlineTwoToneIcon
                  sx={dark === false ? "" : { color: "rgb(190, 190, 190)" }}
                />
              </InputAdornment>
            }
            onChange={(e) => setGoalAuthor(e.target.value)}
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
