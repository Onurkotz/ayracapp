import { useState } from "react";
import "./adding.css";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addThink } from "../../../redux/aboutSlice/aboutSlice";


import ArticleIcon from "@mui/icons-material/Article";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";

function Adding() {
  const dispatch = useDispatch();
  const [think, setThink] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (think === "") {
      alert("Girişler boş bırakılamaz.");
      setThink();

      return false;
    }

    dispatch(addThink({ id: nanoid(), think}));
    setThink();
  };

  return (
    <div>
      <div className="main">
        <form onSubmit={handleSubmit}>
          <Input
            sx={{ margin: "15px", width: "600px" }}
            name="think"
            value={think}
            placeholder="Notlarını Yaz"
            startAdornment={
              <InputAdornment position="start">
                <ArticleIcon />
              </InputAdornment>
            }
            onChange={(e) => setThink(e.target.value)}
          />
          
          <button>Ekle</button>
        </form>
      </div>
    </div>
  );
}

export default Adding;
