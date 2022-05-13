import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { englishMode } from "../../../redux/languageSlice/languageSlice";

import ReactCountryFlag from "react-country-flag";

import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import "./language.css";

function Language() {
  const dispatch = useDispatch();

  const [setIsEnglish] = useState(false);

  const english = useSelector((state) => state.languageMode.isEnglish);

  return (
    <div className="lang">
      <FormControl component="fieldset">
        <FormGroup aria-label="position" row>
          <FormControlLabel
            control={
              <Switch
                color="primary"
                checked={english}
                onChange={(e) => setIsEnglish(e.target.checked)}
                onClick={() => dispatch(englishMode({ isEnglish: true }))}
                name="checked"
              />
            }
            label={
              english === false ? (
                <ReactCountryFlag
                  countryCode="GB"
                  svg
                  style={{
                    width: "45px",
                    height: "20px",
                  }}
                  title="GB"
                />
              ) : (
                <ReactCountryFlag
                  countryCode="TR"
                  svg
                  style={{
                    width: "40px",
                    height: "20px",
                  }}
                  title="US"
                />
              )
            }
            labelPlacement="start"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}

export default Language;
