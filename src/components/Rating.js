import React from "react";
import Button from "@mui/material/Button";
import AnsweredQuestion from "./AnsweredQuestion"

const Rating = ({solution, setShowRating, fetchSolutions, testId}) => {
    const studentSolutions = solution.studentSolutions

    const urlPutGrades = `http://localhost:8080/api/solutions/test`;
    const solutionIds = [];
    const grades = [];

    const handleSaveGrades = async () => {
        const newGrades = {
            testId: testId,
            solutionIds: solutionIds,
            grades: grades
        };
        await fetch(urlPutGrades, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newGrades),
        }).then(() => fetchSolutions(testId)
            .catch((err) => {
                alert("Nie udało się zapisć oceny. Spróbuj ponownie")
                console.log(err)
            }))
    };

    return (
        <div className="rating">
            <h4>{solution.studentName} {solution.studentSurname}</h4>
            <h5>Nr indeksu: {solution.studentId}</h5>
            {studentSolutions.map((question) =>
                <AnsweredQuestion question={question}/>
            )}
            <Button variant="contained" color="success"
                className="rating-button" onClick={ () => {
                    studentSolutions.forEach(question => {
                        if (question.points !== question.tmpPoints) {
                            solutionIds.push(question.solutionId)
                            grades.push(question.tmpPoints)
                        }
                    });
                    handleSaveGrades()
                    setShowRating(false)
                    }}>
                Zapisz oceny
            </Button>
        </div>
    );
}

export default Rating;