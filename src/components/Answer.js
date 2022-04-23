import React from "react";
import PropTypes from "prop-types";

const Answer = ({ answer }) => {
  return <button className="btn answer-button">{answer}</button>;
};

Answer.propTypes = {
  answer: PropTypes.string.isRequired,
};

export default Answer;
