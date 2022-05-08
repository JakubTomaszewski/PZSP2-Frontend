import React from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const NewAnswer = () => {
  const [checked, setChecked] = useState(false);

  function handleCheck(event) {
    setChecked(event.target.checked);
  }

  return (
    <Grid
      container
      spacing={1.5}
      style={{
        width: "100%",
        margin: "auto",
        padding: "0px",
        alignItems: "center",
      }}
    >
      <Grid item xs={8}>
        <TextField
          required
          multiline
          id="answer-content"
          label="Odpowiedź"
          variant="outlined"
          // value={questionContent}
          // onChange={(e) => setText(e.target.value)}
          style={{
            textAlign: "center",
            padding: "0px 0px",
            margin: "auto",
            marginLeft: "0%",
            width: "100%",
          }}
        />
      </Grid>
      <Grid item xs={1}>
        <Checkbox
          checked={checked}
          onChange={handleCheck}
          color="success"
          size="medium"
          label="Poprawna"
        />
      </Grid>
      <Grid item xs={1}>
        <IconButton size="large">
          <AddCircleOutlineIcon />
        </IconButton>
      </Grid>
      <Grid item xs={1}>
        <IconButton aria-label="delete" size="large">
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default NewAnswer;
