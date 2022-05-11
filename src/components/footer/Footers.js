import React from "react";
import { useSelector } from "react-redux";

import "./footer.css";

function Footers() {
  const english = useSelector((state) => state.languageMode.isEnglish);

  return (
    <div className="footerBack">
      <div className="footerMid">
        <footer style={{ textAlign: "center" }}>
          {english === false
            ? "Ayraç ©2022 Kotz tarafından oluşturulmuşur."
            : "Ayraç ©2022 Created by Kotz."}
        </footer>
      </div>
    </div>
  );
}

export default Footers;
