import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const TextInput = (props) => {
  const setText = props.setText;
  const isQuotation = props.isQuotation || false;

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" }
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          label={props.label}
          onChange={(event) => {
            if (isQuotation && event.target.value.length > 0) {
              setText('"' + event.target.value + '"');
            } else {
              setText(event.target.value);
            }
          }}
        />
      </div>
    </Box>
  );
};
