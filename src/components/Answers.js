import React from 'react'
import Answer from "./Answer";
import { Grid } from "@mui/material"

const Answers = ({ answers }) => {
  return (
    <Grid container spacing={0}>
    {answers.map((answer, index) => (
      <Grid item xs={12} key={index}>
        <Answer key={answer.answerId} answer={answer} />
      </Grid>
    ))}
    </Grid>
  )
}

export default Answers