import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";

export const TimeInput = (props) => {
  const setText = props.setTime;
  const prefix = props.prefix || "";
  const [value, setValue] = React.useState(null);

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" }
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField label={props.label} type="time" />

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <InputLabel shrink id="time-input-label">
            {props.label}
          </InputLabel>
          <TimePicker
            labelId="time-input-label"
            label={props.label}
            // value={value}
            // onChange={(newValue) => {
            //   setValue(newValue);
            // }}
            onChange={(newValue) => {
              // if (newValue.length > 0) {
              //   setText(prefix + newValue);
              // } else {
              setText(newValue);
              // }
            }}
            showToolbar="true"
            inputFormat="hh:mm"
            views={["hours", "minutes"]}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>
    </Box>
  );
};
