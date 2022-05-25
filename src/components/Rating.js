import React from "react";
import AnsweredQuestion from "./AnsweredQuestion"
import { useState } from "react";
import { Button } from "bootstrap";

const Rating = (props) => {
    const setRateSolution = props.rateS[1]
    const student = props.solution
    const answeredQuestions = props.solution.studentSolutions

    return (
        <div className="rating">
            <h4>{student.studentName} {student.studentSurname}</h4>
            {answeredQuestions.map((ansQuestion) =>
                <AnsweredQuestion ansQ={ansQuestion}/>
            )}
        </div>
    );
}

export default Rating;