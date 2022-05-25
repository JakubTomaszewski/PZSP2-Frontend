import React from "react";
import { useState } from "react";
import Solutions from "./Solutions"
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Rating from "./Rating"

const Test = (props) => {
    const test = props.test

    const [showReports, setShowReports] = useState(false);
    const [rateSolution, setRateSolution] = useState(false);
    const [solutionRate, setSolutionRate] = useState({});

    const [answeredQuestions1, setAnsweredQuestions1] = useState([
        {questionContent: "Ile jest gwiazd na niebie", questionAnswers: [], studentAnswerContent:"Bardzo dużo", studentAnswer: null},
        {questionContent: "Kiedy zaczeła się wojna?", questionAnswers: [
            {answerId: 10, content: "1914", isCorrect: false},
            {answerId: 11, content: "2022", isCorrect: true},
            {answerId: 12, content: "1939", isCorrect: false}
        ], studentAnswerContent:"1939", studentAnswer: null}
    ])

    const [answeredQuestions2, setAnsweredQuestions2] = useState([
        {questionContent: "Ile jest gwiazd na niebie", questionAnswers: [], studentAnswerContent:"10 miliardów", studentAnswer: null},
        {questionContent: "Kiedy zaczeła się wojna?", questionAnswers: [
            {answerId: 10, content: "1914", isCorrect: false},
            {answerId: 11, content: "2022", isCorrect: true},
            {answerId: 12, content: "1939", isCorrect: false}
        ], studentAnswerContent:"2022", studentAnswer: null}
    ])

    const [solutions, setSolutions] = useState([
        {studentName: "Kamil", studentSurname: "Kot", studentId:"103103", studentSolutions: answeredQuestions1},
        {studentName: "Andrzej", studentSurname: "Robak", studentId:"567234", studentSolutions: answeredQuestions2}
    ])

    return (
        <div className="testrow" key={test.testId}>
                <h4>{test.name}</h4>
                <Grid className="test-grid">
                    <p>hasło: {test.password}</p>
                    <p>Rozpoczęcie: {test.start_date}</p>
                    <p>Zakończenie: {test.end_date}</p>
                    <Button className="test-button"
                        variant="contained"
                        onClick={() => setShowReports(!showReports)}>
                        Przesłane odpowiedzi</Button>
                </Grid>
                {rateSolution && <Rating solution={solutionRate} rateS={[rateSolution, setRateSolution]}></Rating>}
                {showReports && <Solutions
                    solutions={solutions}
                    rateS={[rateSolution, setRateSolution]}
                    solutionR={[solutionRate, setSolutionRate]}/>}
            </div>
    );
}

export default Test;