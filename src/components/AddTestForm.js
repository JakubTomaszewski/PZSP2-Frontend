import React from "react";
import Button from "@mui/material/Button";

const AddTestForm = ({ addTest }) => {
  return (
    <div className="header">
      <h2>Utwórz test</h2>
      <Button variant="contained" color="success" onClick={addTest}>
        Wyślij
      </Button>
    </div>
  );
};

export default AddTestForm;
