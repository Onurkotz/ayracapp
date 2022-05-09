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

  const [setChecked] = useState(false);

  const dark = useSelector((state) => state.dark.checked);

  return (
    <div className="dark">
      <FormControl component="fieldset">
        <FormGroup aria-label="position" row>
          <FormControlLabel
            control={
              <Switch
                color="primary"
                checked={dark}
                onChange={(e) => setChecked(e.target.checked)}
                onClick={() => dispatch(check({ checked: true }))}
                name="checked"
              />
            }
            label={dark === false ? "Karanlık Mod" : "Açık Mod"}
            labelPlacement="start"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}

export default DarkMode;
