import React from "react";
import { useState } from "react";
import { useDrag } from "react-dnd";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Answers from "./Answers";
import UpdateQuestionForm from "./UpdateQuestionForm";
import { Typography } from "@mui/material";

const Question = ({
  questionId,
  type,
  content,
  answers,
  deleteQuestion,
  modifyQuestion,
  course,
}) => {

  const [editingQuestion, setEditingQuestion] = useState(false);
  const [{}, dragRef] = useDrag({
    type: "question",
    item: { questionId, type, content, answers, course },
  });

  function updateQuestion(question) {
    modifyQuestion(question);
    setEditingQuestion(false);
  }

  return (
    <Box
      className="question"
      sx={{
        boxShadow: 5,
        "& .MuiTextField-root": { m: 1, width: "100%" },
        backgroundColor: "primary.dark",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.7, 0.8, 0.9],
        },
      }}
      ref={dragRef}
    >
      {!editingQuestion ? (
        <Grid
          container
          spacing={0}
          style={{
            width: "100%",
            margin: "0",
            padding: "0px",
            alignItems: "center",
          }}
        >
          <Grid item xs={type === "c" ? 5 : 10}>
            <div className="question-text">{content}</div>
          </Grid>
          <Grid item xs={type === "c" ? 5 : 0}>
            <div className="answer-section">
              <Answers answers={answers} />
            </div>
          </Grid>
          <Grid item xs={2}>
            <div className="question-manage-panel">
              <IconButton
                aria-label="delete"
                size="large"
                sx={{
                  "&:hover": {
                    backgroundColor: "primary.dark",
                    opacity: [0.7, 0.8, 0.9],
                  },
                }}
              >
                <DeleteIcon
                  sx={{ color: "white" }}
                  onClick={() => deleteQuestion(questionId)}
                />
              </IconButton>
              <IconButton
                aria-label="edit"
                size="large"
                sx={{
                  "&:hover": {
                    backgroundColor: "primary.dark",
                    opacity: [0.7, 0.8, 0.9],
                  },
                }}
              >
                <EditIcon
                  sx={{ color: "white" }}
                  onClick={() => setEditingQuestion(true)}
                />
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={12} marginTop={1}>
            <Typography>ID pytania: {questionId}</Typography>
          </Grid>
        </Grid>
      ) : (
        <UpdateQuestionForm
          questionId={questionId}
          type={type}
          content={content}
          answers={answers}
          updateQuestion={updateQuestion}
          cancelModify={() => setEditingQuestion(false)}
          course={course}
        />
      )}
    </Box>
  );
};

export default Question;
