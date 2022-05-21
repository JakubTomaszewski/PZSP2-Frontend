import React from "react";
import Answers from "./Answers";
import { useDrag } from "react-dnd";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Question = ({ questionId, type, content, answers, deleteQuestion }) => {
  const [{}, dragRef] = useDrag({
    type: "question",
    item: { questionId, type, content, answers },
  });

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
      <Grid
        container
        spacing={0}
        style={{
          width: "100%",
          margin: "auto",
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
              <EditIcon sx={{ color: "white" }} />
            </IconButton>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Question;
