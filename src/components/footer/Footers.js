import React from "react";
import { useSelector } from "react-redux";

import "./footer.css";

function Footers() {
  const english = useSelector((state) => state.languageMode.isEnglish);
  const dark = useSelector((state) => state.dark.checked);

  return (
    <div className={dark === false ? "footerBack" : "footerBackDark"}>
      <div className="footerMid">
        <footer style={{ textAlign: "center" }}>
          {english === false
            ? "Ayraç ©2022 Onurkotz tarafından oluşturulmuşur."
            : "Ayraç ©2022 Created by Onurkotz."}
        </footer>
      </div>
    </div>
  );
}

export default Footers;
