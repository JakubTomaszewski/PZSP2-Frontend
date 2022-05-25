import React from "react";
import Grid from "@mui/material/Grid";

const AnsweredQuestion = (props) => {
    const answeredQ = props.ansQ

    function showAnswers() {
        if (answeredQ.questionAnswers.lenght === 0) return;
        return(
            answeredQ.questionAnswers.content.toString()
        );
    };

    return (
        <div className="answeredQuestion">
            <Grid className="answered-grid">
                <p>{answeredQ.questionContent}</p>
                {/* <p>{showAnswers()}</p> */}
                <p>{answeredQ.studentAnswerContent}</p>
                <form>
                    <label for="fname">Liczba punktów:</label>
                    <input type="number" id="points" name="points"/>
                </form>
            </Grid>
        </div>
    );
}

export default AnsweredQuestion;