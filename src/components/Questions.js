import React from "react";
import Question from "./Question";

const Questions = ({ questions }) => {
  return (
    <div>
      {questions.map((question) => (
        <Question key={question.questionId}
                  question_id={question.questionId}
                  content={question.content}
                  answers={question.answers} />
      ))}
    </div>
  );
};

export default Questions;
