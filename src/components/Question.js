import React from "react";
import Answer from "./Answer";
import {useDrag} from "react-dnd";

const Question = ({questionId, content, answers}) => {
  const [{}, dragRef] = useDrag({
      type: 'question',
      item: {questionId, content, answers}
  })

  return (
    <div className="question container" ref={dragRef}>
      {content}
      <div className="answer-section">
        {answers.map((answer) => (
          <Answer key={answer.answerId} answer={answer} />
        ))}
      </div>
    </div>
  );
};

export default Question;
