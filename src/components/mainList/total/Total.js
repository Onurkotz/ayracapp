import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./total.css";

import FlagRoundedIcon from "@mui/icons-material/FlagRounded";

function Total() {
  const items = useSelector((state) => state.bookList.items);

  return (
    <div className="totalMain">
      <FlagRoundedIcon sx={{ color: "red", margin: "-3px" }} />
      <Link className="link" to="/myGoals">
        Hedef Kitap Listem
      </Link>

      <span>
        Kaç kitabım var: <b>{items.length}</b>
      </span>
    </div>
  );
}

export default Total;
