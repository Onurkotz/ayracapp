import React from "react";

import AddingGoal from "../addingGoal/Adding";
import ListGoal from "../listGoal/List";
import TotalGoal from "../totalGoal/TotalGoal";

export default function Goal() {
  return (
    <div>
      <AddingGoal />
      <TotalGoal />
      <ListGoal />
    </div>
  );
}
