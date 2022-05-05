import React from "react";
import "./adding.css";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import ArticleIcon from '@mui/icons-material/Article';
import Filter4Icon from '@mui/icons-material/Filter4';
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";

function Adding() {
  return (
    <div>
      <div className="main">
        <form>
          <Input
            sx={{ margin: "15px", width: "300px" }}
            name="bookName"
            placeholder="Kitap Adı"
            startAdornment={
              <InputAdornment position="start">
                <MenuBookTwoToneIcon />
              </InputAdornment>
            }
          />
          <Input
            sx={{ margin: "15px", width: "300px"  }}
            name="author"
            placeholder="Yazar"
            startAdornment={
              <InputAdornment position="start">
                <ModeEditOutlineTwoToneIcon />
              </InputAdornment>
            }
          />
          <Input
            sx={{ margin: "15px", width: "300px"  }}
            name="genre"
            placeholder="Tür"
            startAdornment={
              <InputAdornment position="start">
                <ArticleIcon />
              </InputAdornment>
            }
          />
          <Input
            sx={{ margin: "15px", width: "300px"  }}
            name="page"
            placeholder="Sayfa Sayısı"
            startAdornment={
              <InputAdornment position="start">
                <Filter4Icon />
              </InputAdornment>
            }
          />
          <button>Ekle</button>
        </form>
      </div>
    </div>
  );
}

export default Adding;
