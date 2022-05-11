import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./totalGoal.css";

function TotalGoal() {
  const items = useSelector((state) => state.myGoals.items);
  const dark = useSelector((state) => state.dark.checked);
  const english = useSelector((state) => state.languageMode.isEnglish);

  return (
    <div className="totalGoal">
      <Link className={dark === false ? "link" : "linkDark"} to="/">
        {english === false ? "Geri Dön" : "Back"}
      </Link>
      <span>
        {english === false ? "Almak istediğim kitap sayısı" : "Number of book that I want to get"}: <b>{items.length}</b>
      </span>
    </div>
  );
}

export default TotalGoal;
