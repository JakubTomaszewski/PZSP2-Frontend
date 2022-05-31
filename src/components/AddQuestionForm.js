import React from "react";
import AddQuestion from "./AddQuestion";
import { useState } from "react";
import Button from "@mui/material/Button";

const AddQuestionForm = ({ addQuestion, fetchCourseCodes }) => {
  const [showAddQuestion, setShowAddQuestion] = useState(false);

  return (
    <div>
      <div className="header">
        <h2>Pytania</h2>
        <Button
        variant="contained"
        color="success"
          onClick={() => setShowAddQuestion(!showAddQuestion)}
        >
          Dodaj pytanie
        </Button>
      </div>
      {showAddQuestion && <AddQuestion addQuestion={addQuestion} fetchCourseCodes={fetchCourseCodes} />}
    </div>
  );
};

export default AddQuestionForm;
