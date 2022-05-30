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
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const AddQuestion = ({ addQuestion }) => {
  const [openTypeQuestion, setOpenTypeQuestion] = useState(false);
  const [questionContent, setText] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [answersList, setAnswersList] = useState([
    { content: "", isCorrect: false },
  ]);

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

      // One answer true
      if (
        question.areCorrect.reduce(
          (partialSum, element) => partialSum + element,
          0
        ) !== 1
      ) {
        alert("Jedna odpowiedź musi być poprawna");
        return;
      }

      // No blank answers
      if (question.answers.some((ans) => ans === "")) {
        alert("Odpowiedzi nie mogą być puste");
        return;
      }
    }

    addQuestion(question);

    setAnswersList([{ content: "", isCorrect: false }]);
    setText("");
  }

  function handleSwitch(event) {
    setOpenTypeQuestion(event.target.checked);
  }

  function handleCheck(index) {
    const newAnswerList = [...answersList];
    newAnswerList[index]["isCorrect"] = !newAnswerList[index]["isCorrect"];
    setAnswersList(newAnswerList);
  }

  function handleRemove(index) {
    // console.log("Removing answer with index: " + index);
    const newAnswerList = [...answersList];
    // console.log("Before remove");
    console.log(newAnswerList);
    newAnswerList.splice(index, 1);
    // console.log("After remove");
    // console.log(newAnswerList);
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

  function handleCourseSelect(event) {
    setCourseCode(event.target.value);
  }

  return (
    <Box
      onSubmit={onSubmit}
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "90%" },
      }}
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
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Kod kursu</InputLabel>
            <Select
              value={courseCode}
              label="Kod kursu"
              onChange={handleCourseSelect}
              required
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          {" "}
          <FormControlLabel
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
          />
        </Grid>
      </Grid>
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
          <Grid item xs={6}></Grid>
          <Grid item xs={6}></Grid>
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
            <Typography noWrap>
              <Button
                variant="contained"
                endIcon={<AddCircleOutlineIcon />}
                onClick={addNewAnswer}
                style={{ width: "100%" }}
              >
                Dodaj odpowiedź
              </Button>
            </Typography>
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
        </Grid>
      )}
    </Box>
  );
};

export default AddQuestion;
