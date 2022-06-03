import React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";

const AnsweredQuestion = ({question}) => {

    function updatePoints(newPoints) {
        question.tmpPoints = newPoints
    }

    function printAnswer(questionAns) {
        if (questionAns.studentAnswer == null) return (<p>{questionAns.studentAnswerContent+" "}</p>)
        else return (<p>{questionAns.studentAnswer.content}</p>)
    }

    function setPointsInput(questionAns) {
        if (questionAns.studentAnswer == null) return (
            <input type="number" onChange={e => {
                updatePoints(e.target.value)}}
            defaultValue={questionAns.points}/>)
        else {
            if (questionAns.studentAnswer.isCorrect === true)
                return ( <label>Liczba punktów: 1</label>)
            else return ( <label>Liczba punktów: 0</label>)
        }
    }

    return (
        <div className="answeredQuestion">
            <Grid className="answered-grid">
                <p>{question.questionContent}</p>
                {printAnswer(question)}
                <form>
                    {setPointsInput(question)}
                </form>
            </Grid>
        </div>
    );
}

export default AnsweredQuestion;