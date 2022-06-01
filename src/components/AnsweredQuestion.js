import React from "react";
import Grid from "@mui/material/Grid";

const AnsweredQuestion = ({question}) => {

    function printAnswer(questionAns) {
        if (questionAns.studentAnswer == null) return (<p>{questionAns.studentAnswerContent}</p>)
        else return (<p>{questionAns.studentAnswer.content}</p>)
    }

    return (
        <div className="answeredQuestion">
            <Grid className="answered-grid">
                <p>{question.questionContent}</p>
                {printAnswer(question)}
                <form>
                    <label for="fname">Liczba punktów:</label>
                    <input type="number" id="points" name="points"/>
                </form>
            </Grid>
        </div>
    );
}

export default AnsweredQuestion;