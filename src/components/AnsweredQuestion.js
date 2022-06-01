import React from "react";
import Grid from "@mui/material/Grid";

const AnsweredQuestion = (props) => {
    const answeredQ = props.ansQ

    return (
        <div className="answeredQuestion">
            <Grid className="answered-grid">
                <p>{answeredQ.questionContent}</p>
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