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
          setChosenSolutions(await res.json())
          return await res.json()
        } catch {return {}}
      };

    return (
        <div className="testrow" key={test.testId}>
                <h3>{test.testId}</h3>
                <Grid className="test-grid">
                    <p>hasło: {test.password}</p>
                    <p>Rozpoczęcie: {test.startDate}</p>
                    <p>Zakończenie: {test.endDate}</p>
                    <Button className="test-button"
                        key = {test.testId}
                        variant="contained"
                        onClick={() => {
                            setSolutions(test.testId)
                            setShowReports(!showReports)
                        }}>
                        Przesłane odpowiedzi
                    </Button>
                </Grid>
                {rateSolution && <Rating
                    solution={solutionRate}/>}
                {showReports && <Solutions
                    solutions={chosenSolutions}
                    rateS={[rateSolution, setRateSolution]}
                    solutionR={[solutionRate, setSolutionRate]}/>}
            </div>
    );
}

export default Test;