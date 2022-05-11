import React from "react";
import DarkMode from "../darkMode/DarkMode";
import Language from "../language/Language";

import "./homeModes.css";

function HomeMode() {
  return (
    <div className="">
      <Language />
      <DarkMode />
    </div>
  );
}

export default HomeMode;
