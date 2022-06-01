import React from "react";
import AnsweredQuestion from "./AnsweredQuestion"

const Rating = ({solution}) => {
    const studentSolutions = solution.studentSolutions

    return (
        <div className="rating">
            <h5>{solution.studentName} {solution.studentSurname}</h5>
            <h6>Nr indeksu: {solution.studentId}</h6>
            {studentSolutions.map((question) =>
                <AnsweredQuestion question={question}/>
            )}
        </div>
    );
}

export default Rating;