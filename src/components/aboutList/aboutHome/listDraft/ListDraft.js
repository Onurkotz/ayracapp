import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteThink } from "../../../../redux/aboutSlice/aboutSlice";

import "./list.css";

import DeleteIcon from "@mui/icons-material/Delete";

function ListDraft() {
  const items = useSelector((state) => state.about.items);
  const dark = useSelector((state) => state.dark.checked);
  const english = useSelector((state) => state.languageMode.isEnglish);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm(english === false ? "Emin misiniz?" : "Are you sure?")) {
      dispatch(deleteThink(id));
    }
  };

  return (
    <div className="container">
      <ol className={dark === false ? "" : "darkol"}>
        {items.map((item) => (
          <li key={item.id}>
            {item.think}
            <span>
              <DeleteIcon
                sx={dark === false ? { color: "red" } : { color: "purple" }}
                className="delete"
                onClick={() => handleDelete(item.id)}
              />
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ListDraft;
