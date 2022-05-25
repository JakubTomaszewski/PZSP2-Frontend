import React from "react";
import AnsweredQuestion from "./AnsweredQuestion"

const Rating = (props) => {
    const student = props.solution
    const answeredQuestions = props.solution.studentSolutions

    return (
        <div className="rating">
            <h5>{student.studentName} {student.studentSurname}</h5>
            {answeredQuestions.map((ansQuestion) =>
                <AnsweredQuestion ansQ={ansQuestion}/>
            )}
        </div>
    );
}

export default Rating;