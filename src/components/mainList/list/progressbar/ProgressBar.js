import React from "react";

function ProgressBar(props) {
  return <progress value={props.readed} max={props.page} t />;
}

export default ProgressBar;
