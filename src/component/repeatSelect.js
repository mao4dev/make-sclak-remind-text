import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  selectWidth: {
    width: 265
  }
}));

export const RepeatSelect = (props) => {
  const classes = useStyles();
  const setSelected = props.setSelected;
  const handleChange = (e) => setSelected(e.target.value);
  const data = [
    { value: "", label: "--" },
    { value: "every day", label: "毎日" },
    { value: "every weekday", label: "毎日(平日)" },
    { value: "every Monday", label: "毎週月曜日" },
    { value: "every Tuesday", label: "毎週火曜日" },
    { value: "every Wednesday", label: "毎週水曜日" },
    { value: "every Thursday", label: "毎週木曜日" },
    { value: "every Friday", label: "毎週金曜日" }
  ];

  return (
    <div>
      <Box sx={{ Width: "25em", m: 1 }}>
        <FormControl>
          <InputLabel shrink id="simple-select-label">
            {props.label}
          </InputLabel>
          <Select
            labelId="simple-select-label"
            id="simple-select"
            label={props.label}
            onChange={handleChange}
            notched
            className={classes.selectWidth}
          >
            {data.map((d) => (
              <MenuItem value={d.value}>{d.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};
