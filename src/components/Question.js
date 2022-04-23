import React from "react";
import Answer from "./Answer";

const Question = (props) => {
  return (
    <div className="question container">
      {props.question.text}
      <div className="answer-section">
        {props.question.answers.map((answer) => (
          <Answer answer={answer} />
        ))}
      </div>
    </div>
  );
};

export default Question;
