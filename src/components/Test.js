import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Solutions from "./Solutions"
import Rating from "./Rating"
import TestPreviw from "./TestPreview";

const Test = ({test}) => {
    const [showReports, setShowReports] = useState(false);  // students tests submitted
    const [showRating, setShowRating] = useState(false);    // rating specific student answers
    const [solutions, setSolutions] = useState([]);
    const [solutionToRate, setSolutionToRate] = useState({});
    const [showTest, setShowTest] = useState(false);        // showing test preview

    const setSolutionsURL = (testId) => {
        return `http://localhost:8080/api/solutions/test?id=${testId}`
      }

      const fetchSolutions = async (testId) => {
        const res = await fetch(setSolutionsURL(testId))
        .catch((err) => {
            alert("Nie udało się pobrać przesłanych prac studentów. Spróbuj ponownie")
            console.log(err)
        })
        const data = await res.json()
        const tmpSolutions = data.solutions
        setSolutions(tmpSolutions)
        return tmpSolutions
      };

      function formatDate(date) {
          const dateAndTime = date.split("T")
          const HHMMSS = dateAndTime[1].split(".")
          return dateAndTime[0] + "\nGodzina: " + HHMMSS[0]
      }

    return (
        <div className="testrow" key={test.testId}>
                <h3>{test.name}</h3>
                <Button variant='outlined'
                    onClick={() => setShowTest(!showTest)}>
                    Podgląd testu </Button>

                {showTest && <TestPreviw testQuestions={test.testQuestions} />}

                <Grid className="test-grid">
                    <p>hasło: {test.password}</p>
                    <p>Początek: {formatDate(test.startDate)}</p>
                    <p>Koniec: {formatDate(test.endDate)}</p>
                    <Button className="test-button"
                        key = {test.testId}
                        variant="contained"
                        onClick={() => {
                            fetchSolutions(test.testId)
                            setShowReports(!showReports)
                            setShowRating(false)
                        }}>
                        Odpowiedzi studentów
                    </Button>
                </Grid>

                {showReports && <Solutions
                    testInfo={[test.testId, test.name]}
                    solutions={solutions}
                    showRat={[showRating, setShowRating]}
                    setSolutionToRate={setSolutionToRate}/>}
                {showRating && <Rating
                    solution={solutionToRate}
                    setShowRating={setShowRating}
                    fetchSolutions={fetchSolutions}
                    testId={test.testId}/>}
            </div>
    );
}

export default Test;