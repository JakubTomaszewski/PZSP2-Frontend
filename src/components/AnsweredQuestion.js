import React from "react";
import Grid from "@mui/material/Grid";

const AnsweredQuestion = ({question}) => {

    function printAnswer(questionAns) {
        if (questionAns.studentAnswer == null) return (<p>{questionAns.studentAnswerContent}</p>)
        else return (<p>{questionAns.studentAnswer.content}</p>)
    }
    function setPointsInput(questionAns) {
        if (questionAns.studentAnswer == null) return (
            <input type="number"
            defaultValue={0}/>)
        else {
            if (questionAns.studentAnswer.isCorrect === true) return (
                <input type="number"
                value={1}/>)
            else return (
                <input type="number"
                value={0}/>)
        }
    }

    return (
        <div className="answeredQuestion">
            <Grid className="answered-grid">
                <p>{question.questionContent}</p>
                {printAnswer(question)}
                <form>
                    <label for="fname">Liczba punktów:</label>
                    {setPointsInput(question)}
                </form>
            </Grid>
        </div>
    );
}

export default AnsweredQuestion;