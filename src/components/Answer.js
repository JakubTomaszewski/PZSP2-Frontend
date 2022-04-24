import React from "react";
import PropTypes from "prop-types";

const Answer = ({ answer }) => {
  return <button className="answer-button">{answer.content}</button>;
};

export default Answer;
