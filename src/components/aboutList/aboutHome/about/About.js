import React from "react";
//import {useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

import AddingAbout from "../../addingAbout/Adding";
import ListDraft from "../listDraft/ListDraft";

import "./about.css";

function About() {
  //const  {id} = useParams();

  const dark = useSelector((state) => state.dark.checked);

  return (
    <div>
      <AddingAbout />
      <div className="about">
        <Link className={dark === false ? "link" : "darkLink"} to="/">
          Geri Dön
        </Link>
      </div>

      <ListDraft />
    </div>
  );
}

export default About;
