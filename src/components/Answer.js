import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Answer = ({ answer }) => {
  return(
              <Button className="answer-button"
            variant="contained"
            style={{ width: "100%" , margin: "5px"}}
            color="primary"
          >
            <Typography noWrap>
              {answer.content}
            </Typography>
          </Button>)
};

export default Answer;
