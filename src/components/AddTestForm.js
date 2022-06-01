import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const AddTestForm = ({
  addTest,
  dateStart,
  setDateStart,
  dateEnd,
  setDateEnd,
  setTestName,
  noQuestions
}) => {
  return (
    <Grid container>
      <Grid item container className="header" direction='row' maxWidth justifyContent={"center"}>
        <Grid item container spacing={0} direction='column' xs={7}>
          <Grid item>
            <h2>Tworzenie testu</h2>
          </Grid>
          <Grid item>
            <p>({noQuestions})</p>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Button variant="contained" color="success" onClick={addTest}>
            Utwórz test
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        className="header"
        spacing={1}
        style={{
          width: "90%",
          margin: "auto",
          padding: "0px",
          alignItems: "center",
        }}
      >
        <Grid item xs={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="Data rozpoczęcia"
              value={dateStart}
              ampm={false}
              onChange={(newValue) => {
                setDateStart(newValue);
              }}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="Data zakończenia"
              value={dateEnd}
              ampm={false}
              onChange={(newValue) => {
                setDateEnd(newValue);
              }}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} maxWidth>
          <TextField
            fullWidth
            outlined
            label='Nazwa testu'
            variant='outlined'
            onChange={e => setTestName(e.target.value)}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddTestForm;
