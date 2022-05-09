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

  const handleSubmit = (e) => {
    e.preventDefault();

    const space = () => {
      setGoalName("");
      setGoalAuthor("");
    };
    if (goalName === "" || goalAuthor === "") {
      alert("Girişler boş bırakılamaz.");
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
            sx={
              dark === false
                ? { margin: "15px", width: "600px" }
                : { margin: "15px", width: "600px", color: "white" }
            }
            name="goalName"
            value={goalName}
            placeholder="Kitap Adı"
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
            sx={
              dark === false
                ? { margin: "15px", width: "600px" }
                : { margin: "15px", width: "600px", color: "white" }
            }
            name="goalAuthor"
            value={goalAuthor}
            placeholder="Yazar"
            startAdornment={
              <InputAdornment position="start">
                <ModeEditOutlineTwoToneIcon
                  sx={dark === false ? "" : { color: "rgb(190, 190, 190)" }}
                />
              </InputAdornment>
            }
            onChange={(e) => setGoalAuthor(e.target.value)}
          />

          <button className={dark === false ? "" : "darkButton"}>Ekle</button>
        </form>
      </div>
    </div>
  );
}

export default Adding;
