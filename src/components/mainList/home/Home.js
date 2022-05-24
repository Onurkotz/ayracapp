import React from "react";
import { Formik } from "formik";

import Adding from "../adding/Adding";
import List from "../list/List";
import Total from "../total/Total";

import schema from "../../../validation/validation";

function Home() {
  return (
    <div>
      <Formik render={() => <Adding />} validationSchema={schema} />

      <Total />
      <List />
    </div>
  );
}

export default Home;
