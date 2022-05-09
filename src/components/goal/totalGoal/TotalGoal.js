import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./totalGoal.css";

function TotalGoal() {
  const items = useSelector((state) => state.myGoals.items);
  const dark = useSelector((state) => state.dark.checked);

  return (
    <div className="totalGoal">
      <Link className={dark === false ? "link" : "linkDark"} to="/">
        Geri Dön
      </Link>
      <span>
        Almak istediğim kitap sayısı: <b>{items.length}</b>
      </span>
    </div>
  );
}

export default TotalGoal;
