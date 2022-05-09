import React from "react";
//import {useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import AddingAbout from "../../addingAbout/Adding";
import ListDraft from "../listDraft/ListDraft";

import "./about.css";

function About() {
  //const  {id} = useParams();

  return (
    <div>
      <AddingAbout />
      <div className="about">
        <Link className="link" to="/">
          Geri Dön
        </Link>
      </div>

      <ListDraft />
    </div>
  );
}

export default About;
