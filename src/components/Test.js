import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Solutions from "./Solutions"
import Rating from "./Rating"

const Test = ({test}) => {
    const [showReports, setShowReports] = useState(false);
    const [rateSolution, setRateSolution] = useState(false);
    const [solutionRate, setSolutionRate] = useState({});
    const [chosenSolutions, setChosenSolutions] = useState([]);

    const setSolutionsURL = (testId) => {
        return `http://localhost:8080/api/solutions/test?id=${testId}`
      }

      const setSolutions = async (testId) => {
        try {
          const res = await fetch(setSolutionsURL(testId))
          const data = await res.json()
          const tmpSolutions = data.solutions
          setChosenSolutions(tmpSolutions)
          return tmpSolutions
        } catch {return {}}
      };

      function formatDate(date) {
          const myArray = date.split("T")
          const HHMMSS = myArray[1].split(".")
          return myArray[0] + "\nGodzina: " + HHMMSS[0]
      }

    return (
        <div className="testrow" key={test.testId}>
                <h3>{test.name}</h3>
                <Grid className="test-grid">
                    <p>hasło: {test.password}</p>
                    <p>Początek: {formatDate(test.startDate)}</p>
                    <p>Koniec: {formatDate(test.endDate)}</p>
                    <Button className="test-button"
                        key = {test.testId}
                        variant="contained"
                        onClick={() => {
                            setSolutions(test.testId)
                            setShowReports(!showReports)
                            setRateSolution(false)
                        }}>
                        Przesłane odpowiedzi
                    </Button>
                </Grid>

                {showReports && <Solutions
                    testId={test.testId}
                    testName={test.name}
                    solutions={chosenSolutions}
                    rateS={[rateSolution, setRateSolution]}
                    setSolutionRate={setSolutionRate}/>}
                {rateSolution && <Rating
                    solution={solutionRate}
                    setRateSolution={setRateSolution}
                    setSolutions={setSolutions}
                    testId={test.testId}/>}
            </div>
    );
}

export default Test;