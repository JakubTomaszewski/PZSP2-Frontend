import React from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const NewAnswer = ({
  index,
  content,
  isCorrect,
  handleRemove,
  handleCheck,
  handleInput,
}) => {
  const [text, setText] = useState(content);
  const [checked, setChecked] = useState(isCorrect);

  function handleCheckbox(event) {
    setChecked(event.target.checked);
  }

  function handleInputEvent(event) {
    setText(event.target.value);
    handleInput(event.target.value, index);
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
      <Grid item xs={9}>
        <TextField
          required
          multiline
          id="answer-content"
          label="Odpowiedź"
          variant="outlined"
          value={text}
          onChange={(e) => handleInputEvent(e)}
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
          onChange={(event) => {
            handleCheck(index);
            handleCheckbox(event);
          }}
          color="success"
          size="medium"
          label="Poprawna"
        />
      </Grid>
      <Grid item xs={1}>
        <IconButton
          aria-label="delete"
          size="large"
          sx={{
            "&:hover": {
              backgroundColor: "primary",
              opacity: [0.7, 0.8, 0.9],
            },
          }}
        >
          <DeleteIcon onClick={() => handleRemove(index)} />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default NewAnswer;
