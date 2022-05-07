import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteThink } from "../../../../redux/aboutSlice/aboutSlice";

import DeleteIcon from "@mui/icons-material/Delete";

function ListDraft() {
  const items = useSelector((state) => state.about.items);

  const dispatch = useDispatch();

  console.log(items);

  const handleDelete = (id) => {
    if (window.confirm("Emin misiniz?")) {
      dispatch(deleteThink(id));
    }
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <ul key={item.id}>
            {item.think}
            <DeleteIcon
              className="delete"
              onClick={() => handleDelete(item.id)}
            />
          </ul>
        ))}
      </ul>
    </div>
  );
}

export default ListDraft;
