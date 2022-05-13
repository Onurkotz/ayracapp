import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./total.css";

import FlagRoundedIcon from "@mui/icons-material/FlagRounded";

function Total() {
  const items = useSelector((state) => state.bookList.items);

  const dark = useSelector((state) => state.dark.checked);
  const english = useSelector((state) => state.languageMode.isEnglish);

  const className = dark === false ? "link" : "darkLink"

  return (
    <div className="totalMain">
      <FlagRoundedIcon
        sx={
          dark === false
            ? { color: "red", margin: "-3px" }
            : { color: "purple", margin: "-3px" }
        }
      />
      <Link className={className} to="/myGoals">
        {english === false
          ? "Okumak İstediklerim"
          : "Books That I Want To Read"}
      </Link>

      <span>
        {english === false
          ? "Kaç kitabım var ? "
          : "How many books do I have ? "}
        : <b>{items.length}</b>
      </span>
    </div>
  );
}

export default Total;
