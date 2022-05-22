import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import NewAnswer from "./NewAnswer";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const UpdateQuestionForm = ({
  type,
  content,
  answers,
  updateQuestion,
  cancelModify,
}) => {
  const openTypeQuestion = type === "o";
  const [questionContent, setText] = useState(content);
  const [answersList, setAnswersList] = useState(answers);

  function onSubmit(e) {
    e.preventDefault();
    if (!questionContent) {
      alert("Proszę dodać treść pytania");
      return;
    }

    // open type question
    let question = {
      type: "o",
      content: questionContent,
    };

    if (!openTypeQuestion) {
      // closed type question
      question = {
        type: "c",
        content: questionContent,
        answers: answersList.map((question) => question.content),
        areCorrect: answersList.map((question) => question.isCorrect),
      };

      // TODO: create function checkNewQuestionCorrectness
      // At least 2 answers
      if (question.answers.length < 2) {
        alert("Proszę dodać więcej odpowiedzi");
        return;
      }

      // At least one correct answer
      if (!question.areCorrect.some((ans) => ans === true)) {
        alert("Przynajmniej jedna odpowiedź musi być poprawna");
        return;
      }

      // No blank answers
      if (question.answers.some((ans) => ans === "")) {
        alert("Odpowiedzi nie mogą być puste");
        return;
      }
    }

    updateQuestion(question);

    // setAnswersList([{ content: "", isCorrect: false }]);
    // setText("");
  }

  function handleCheck(index) {
    const newAnswerList = [...answersList];
    newAnswerList[index]["isCorrect"] = !newAnswerList[index]["isCorrect"];
    setAnswersList(newAnswerList);
  }

  function handleRemove(index) {
    const newAnswerList = [...answersList];
    newAnswerList.splice(index, 1);
    setAnswersList(newAnswerList);
  }

  function addNewAnswer() {
    setAnswersList([...answersList, { content: "", isCorrect: false }]);
  }

  function handleInput(content, index) {
    const newAnswerList = [...answersList];
    newAnswerList[index]["content"] = content;
    setAnswersList(newAnswerList);
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
      {/* <FormControlLabel
        style={{
          alignItems: "center",
          marginLeft: "5%",
        }}
        control={
          <Switch
            checked={openTypeQuestion}
            onChange={handleSwitch}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label="Pytanie otwarte"
      /> */}

      {openTypeQuestion ? (
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
              defaultValue={content}
              variant="outlined"
              value={questionContent}
              onChange={(e) => setText(e.target.value)}
              rows={3}
              style={{
                textAlign: "center",
                padding: "0px 0px",
                margin: "auto",
                marginLeft: "0%",
                width: "100%",
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              type="submit"
              style={{ width: "100%" }}
            >
              Zapisz
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="error"
              onClick={() => cancelModify()}
              style={{ width: "100%", margin: "5px" }}
            >
              Anuluj
            </Button>
          </Grid>
        </Grid>
      ) : (
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
              rows={3}
              style={{
                textAlign: "center",
                padding: "0px 0px",
                margin: "auto",
                marginLeft: "0%",
                width: "100%",
              }}
            />
          </Grid>
          {answersList.map((answer, i) => (
            <NewAnswer
              index={i}
              key={i}
              content={answer.content}
              isCorrect={answer.isCorrect}
              handleCheck={handleCheck}
              handleRemove={handleRemove}
              handleInput={handleInput}
            />
          ))}
          <Grid item xs={6}>
            <Typography>
              <Button
                variant="contained"
                endIcon={<AddCircleOutlineIcon />}
                onClick={addNewAnswer}
                style={{ width: "100%", minWidt: "100%" }}
              >
                Dodaj odpowiedź
              </Button>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="error"
              onClick={() => cancelModify()}
              style={{ width: "100%", margin: "5px" }}
            >
              Anuluj
            </Button>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              type="submit"
              style={{ width: "100%", margin: "5px" }}
            >
              Zapisz
            </Button>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default UpdateQuestionForm;
