import { useState } from "react";
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import NewAnswer from "./NewAnswer";

const AddQuestion = ({ addQuestion }) => {
  const [questionContent, setText] = useState("");
  const [answersList, setAnswersList] = useState([
    { answerContent: "", isCorrect: false },
  ]);

  function onSubmit(e) {
    e.preventDefault();
    if (!questionContent) {
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

    addQuestion(questionContent);

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
      <Grid
        container
        spacing={1.5}
        style={{
          width: "90%",
          margin: "auto",
          padding: "0px",
          alignItems: "center",
        }}
      >
        <Grid item xs={12}>
          <TextField
            required
            multiline
            id="question-content"
            label="Treść pytania"
            variant="outlined"
            value={questionContent}
            onChange={(e) => setText(e.target.value)}
            style={{
              textAlign: "center",
              padding: "0px 0px",
              margin: "auto",
              marginLeft: "0%",
              width: "100%",
            }}
          />
        </Grid>
        <NewAnswer />
        <Grid item xs={12}>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            type="submit"
            style={{ width: "100%" }}
          >
            Zapisz
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddQuestion;
