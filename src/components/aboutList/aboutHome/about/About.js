import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import AddingAbout from "../../addingAbout/Adding";
import ListDraft from "../listDraft/ListDraft";

import "./about.css";

function About() {
  const dark = useSelector((state) => state.dark.checked);
  const english = useSelector((state) => state.languageMode.isEnglish);

  return (
    <div>
      <AddingAbout />
      <div className="about">
        <Link className={dark === false ? "link" : "darkLink"} to="/">
          {english === false ? "Geri Dön" : "Back"}
        </Link>
      </div>

      <ListDraft />
    </div>
  );
}

export default About;
