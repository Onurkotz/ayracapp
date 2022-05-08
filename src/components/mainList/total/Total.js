import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./total.css";

function Total() {
  const items = useSelector((state) => state.bookList.items);

  return (
    <div className="totalMain">
      <Link to="./">Hedef Kitap Listem</Link>
      <span> Kaç kitabım var: {items.length} </span>
    </div>
  );
}

export default Total;
