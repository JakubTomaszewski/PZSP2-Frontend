import React from "react";
import Button from "@mui/material/Button";

const Answer = ({ answer }) => {
  return(
              <Button className="answer-button"
            variant="contained"
            style={{ width: "100%" , margin: "5px"}}
            color="primary"
          >
            {answer.content}
          </Button>)
};

export default Answer;
