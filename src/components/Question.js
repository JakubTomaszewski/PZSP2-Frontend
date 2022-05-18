import React from "react";
import Answers from "./Answers";
import { useDrag } from "react-dnd";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Question = ({ questionId, content, answers }) => {
  const [{}, dragRef] = useDrag({
    type: "question",
    item: { questionId, content, answers },
  });

  return (
    <Box
      className="question"
      sx={{
        boxShadow: 5,
        "& .MuiTextField-root": { m: 1, width: "90%" },
        backgroundColor: "primary.dark",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.7, 0.8, 0.9],
        },
      }}
      ref={dragRef}
    >
      <div className="question-text">{content}</div>
      <div className="answer-section">
        <Answers answers={answers} />
      </div>
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
          <DeleteIcon sx={{ color: "white" }} />
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
    </Box>
  );
};

export default Question;
