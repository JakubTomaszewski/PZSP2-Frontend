import React from "react";
import AddQuestion from "./AddQuestion";
import { useState } from "react";
import Button from "@mui/material/Button";
import {Grid} from "@mui/material";

const AddQuestionForm = ({ addQuestion, fetchCourseCodes, noQuestions }) => {
  const [showAddQuestion, setShowAddQuestion] = useState(false);

  return (
    <Grid container>
      <Grid item container className="header" alignItems='center' justifyContent='space-evenly' maxWidth>
        <Grid item container spacing={0} xs={7} alignItems='center' justifyContent='center' direction='column'>
          <Grid item>
            <h2>Pytania</h2>
          </Grid>
          <Grid item>
            <p>({noQuestions})</p>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Button
            variant="contained"
            color="success"
            onClick={() => setShowAddQuestion(!showAddQuestion)}
          >
            Dodaj pytanie
          </Button>
        </Grid>
      </Grid>
      {showAddQuestion && (
        <AddQuestion
          addQuestion={addQuestion}
          fetchCourseCodes={fetchCourseCodes}
        />
      )}
    </Grid>
  );
};

export default AddQuestionForm;
