import React from "react";
import Answers from "./Answers";
import { useDrag } from "react-dnd";
import Box from "@mui/material/Box";

const Question = ({ questionId, content, answers }) => {
  const [{}, dragRef] = useDrag({
    type: "question",
    item: { questionId, content, answers },
  });

  return (
    <Box
      sx={{
        boxShadow: 5,
        "& .MuiTextField-root": { m: 1, width: "90%" },
        backgroundColor: "primary.dark",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.7, 0.8, 0.9],
        },
      }}
      className="question"
      ref={dragRef}
    >
      <div className="question-text">{content}</div>
      <div className="answer-section">
        <Answers answers={answers} />
      </div>
    </Box>

    // <div className="question container" ref={dragRef}>
    //   <div className="question-text">
    //   {content}
    //   </div>
    //   <div className="answer-section">
    //     <Answers answers={answers}/>
    //   </div>
    // </div>
  );
};

export default Question;
