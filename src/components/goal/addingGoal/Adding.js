import { useState } from "react";
import "./adding.css";
import { useDispatch } from "react-redux";
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
            sx={{ margin: "15px", width: "300px" }}
            name="goalName"
            value={goalName}
            placeholder="Kitap Adı"
            startAdornment={
              <InputAdornment position="start">
                <MenuBookTwoToneIcon />
              </InputAdornment>
            }
            onChange={(e) => setGoalName(e.target.value)}
          />
          <Input
            sx={{ margin: "15px", width: "300px" }}
            name="goalAuthor"
            value={goalAuthor}
            placeholder="Yazar"
            startAdornment={
              <InputAdornment position="start">
                <ModeEditOutlineTwoToneIcon />
              </InputAdornment>
            }
            onChange={(e) => setGoalAuthor(e.target.value)}
          />

          <button>Ekle</button>
        </form>
      </div>
    </div>
  );
}

export default Adding;
