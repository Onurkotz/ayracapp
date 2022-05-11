import React from "react";

import Adding from "../adding/Adding";
import List from "../list/List";
import Total from "../total/Total";
import Footer from "../../footer/Footers";

function Home() {
  return (
    <div>
      <Adding />
      <Total />
      <List />
      <Footer />
    </div>
  );
}

export default Home;
