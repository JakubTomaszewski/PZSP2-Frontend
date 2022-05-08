import { useState } from "react";
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

const AddQuestion = ({ addQuestion }) => {
  const [text, setText] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    if (!text) {
      alert("Proszę dodać treść pytania");
      return;
    }

    // if closed && answers.length() < 2 {
    // alert("Proszę dodać odpowiedzi);
    // return;
    // }

    // if sum(areCorrect) <= 0 {
    // alert("Przynajmniej jedna odpowiedź musi być poprawna")
    // }

    addQuestion(text);

    setText("");
  }

  return (
    <Box
      onSubmit={onSubmit}
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "90%" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          multiline
          id="question-content"
          label="Treść pytania"
          variant="outlined"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          type="submit"
          style={{ width: "90%" }}
        >
          Zapisz
        </Button>
      </div>
    </Box>

    // <form className="add-form" onSubmit={onSubmit}>
    //   <div>
    //     <label>Treść</label>
    //     <input
    //       type="text"
    //       placeholder="Treść pytania"
    //       value={text}
    //       onChange={(e) => setText(e.target.value)}
    //     ></input>
    //     <input
    //       className="save-question-btn"
    //       type="submit"
    //       value="Zapisz"
    //     ></input>
    //   </div>
    // </form>
  );
};

export default AddQuestion;
