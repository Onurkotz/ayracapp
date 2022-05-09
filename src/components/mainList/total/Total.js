import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./total.css";

import FlagRoundedIcon from "@mui/icons-material/FlagRounded";

function Total() {
  const items = useSelector((state) => state.bookList.items);

  const dark = useSelector((state) => state.dark.checked);

  return (
    <div className="totalMain">
      <FlagRoundedIcon
        sx={
          dark === false
            ? { color: "red", margin: "-3px" }
            : { color: "purple", margin: "-3px" }
        }
      />
      <Link className={dark === false ? "link" : "darkLink"} to="/myGoals">
        Hedef Kitap Listem
      </Link>

      <span>
        Kaç kitabım var: <b>{items.length}</b>
      </span>
    </div>
  );
}

export default Total;
