import React from "react";

const Answer = ({ answer }) => {
  return <button className="answer-button">{answer.content}</button>;
};

export default Answer;
