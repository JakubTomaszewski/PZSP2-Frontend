import React from "react";
import Button from "@mui/material/Button";
import { saveAs } from "file-saver";

const Solutions = ({testId, testName, solutions, rateS, setSolutionRate}) => {
    const rateSolution = rateS[0]
    const setRateSolution = rateS[1]
    const downloadURL = `http://localhost:8080/api/tests/downloadCsv?id=`+testId

    const saveFile = () => {
        saveAs(downloadURL, testName+".csv");
    };

    return (
        <div className="solutions">
             <table className="solution-table">
                 <tr>
                     <th>Imię</th>
                     <th>Nazwisko</th>
                     <th>Numer indeksu</th>
                     <th>Liczba punktów</th>
                     <th>Ocenianie</th>
                 </tr>
                 {solutions.map((solution) =>
                 <tr>
                     <td>{solution.studentName}</td>
                     <td>{solution.studentSurname}</td>
                     <td>{solution.studentId}</td>
                     <td>{solution.openQuestionsPoints+solution.closedQuestionsPoints}</td>
                     <td><Button className="solution-button"
                        onClick={() => (
                            setRateSolution(!rateSolution),
                            setSolutionRate(solution))}>
                        Przesłane odpowiedzi</Button></td>
                 </tr>)}
                 </table>
                 <Button onClick={saveFile}>
                    Pobierz oceny
                </Button>
        </div>
    );
}

export default Solutions;