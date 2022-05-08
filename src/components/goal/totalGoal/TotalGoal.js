import React from 'react'
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";

import "./totalGoal.css"

function TotalGoal() {

    const items = useSelector((state) => state.myGoals.items);

    
    
  return (
    <div className="totalGoal">
      <Link className="link" to="/" >Geri Dön</Link>
        <span>Almak istediğim kitap sayısı: {items.length}</span>
    </div>
  )
}

export default TotalGoal