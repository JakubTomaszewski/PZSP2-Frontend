import React from "react";
import Answers from "./Answers";

const Question = (props) => {
  return (
    <div className="question container">
      <div className="question-text">
      {props.question.content}
      </div>
      <div className="answer-section">
      <Answers answers={props.question.answers}/>
      </div>
    </div>
  );
};

export default Question;
