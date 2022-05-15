import React from "react";

import { ProgressBar } from "react-bootstrap";

function Progress(props) {
  return <ProgressBar now={props.readed} max={props.page} />;
}

export default Progress;
