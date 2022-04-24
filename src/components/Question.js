import React from "react";
import Answer from "./Answer";

const Question = (props) => {
  return (
    <div className="question container">
      {props.question.content}
      <div className="answer-section">
        {props.question.answers.map((answer) => (
          <Answer key={answer.answerId} answer={answer} />
        ))}
      </div>
    </div>
  );
};

export default Question;
