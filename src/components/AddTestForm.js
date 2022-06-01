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
  testName,
  setTestName
}) => {
  return (
    <div>
      <div className="header">
        <h2>Tworzenie testu</h2>
        <Button variant="contained" color="success" onClick={addTest}>
          Utwórz test
        </Button>
      </div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": {
            m: 1,
            width: "90%",
          },
        }}
        autoComplete="off"
      >
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
                onChange={(newValue) => {
                  setDateEnd(newValue);
                }}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} >
            <TextField
              outlined
              label='Nazwa testu'
              variant='outlined'
              onChange={e => setTestName(e.target.value)}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AddTestForm;
