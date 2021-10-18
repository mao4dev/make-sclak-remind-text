import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import InputLabel from "@mui/material/InputLabel";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";

// import TimePicker2 from "rc-time-picker";

export const TimeInput = (props) => {
  const setText = props.setTime;

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" }
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <TimePicker
            ampm={false}
            views={["hours", "minutes"]}
            inputFormat="HH:mm"
            mask="__:__"
            value={props.timeValue}
            label={props.label}
            onChange={(newValue) => {
              setText(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>
    </Box>
  );
};
