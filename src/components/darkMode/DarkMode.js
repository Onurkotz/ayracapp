import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { check } from "../../redux/darkSlice/darkSlice";

import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import "./dark.css";

function DarkMode() {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);

  const dark = useSelector((state) => state.dark.isChecked);

  const handleChange = (e) => {
      
    setChecked(e.target.checked);
  };

  const handleSubmit = () => {
    dispatch(check());
  };

  console.log(dark);

  return (
    <div className="dark">
      <FormControl component="fieldset">
        <FormGroup aria-label="position" row>
          <FormControlLabel
            control={
              <Switch
                color="primary"
                checked={checked}
                onChange={handleChange}
                onClick={handleSubmit}
                name="checked"
              />
            }
            label="Karanlık Mod"
            labelPlacement="start"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}

export default DarkMode;
