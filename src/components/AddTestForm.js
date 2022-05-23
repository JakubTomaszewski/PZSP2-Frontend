import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import {DateTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import TextField from "@mui/material/TextField";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";

const AddTestForm = ({ addTest, dateStart, setDateStart, dateEnd, setDateEnd }) => {

  return (
    <Grid container className="header" spacing={2} >
      <Grid item xs={8}>
        <h2>Utwórz test</h2>
      </Grid>
      <Grid item xs={4}>
        <Button variant="contained" color="success" onClick={addTest}>
          Wyślij
        </Button>
      </Grid>
      <Grid item>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="Data rozpoczęcia"
            value={dateStart}
            onChange={(newValue) => {
              setDateStart(newValue);
            }}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="Data rozpoczęcia"
            value={dateEnd}
            onChange={(newValue) => {
              setDateEnd(newValue);
            }}
          />
        </LocalizationProvider>
      </Grid>

    </Grid>
  );
};

export default AddTestForm;
