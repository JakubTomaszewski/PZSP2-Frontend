import Button from "@mui/material/Button";
import { useState } from "react";
import React from "react";
import { SettingsRemoteOutlined } from "@mui/icons-material";

const Solutions = (props) => {

    const solutions = props.solutions
    const rateSolution = props.rateS[0]
    const setRateSolution = props.rateS[1]
    const setSolutionRate = props.solutionR[1]

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
                     <td>17</td>
                     <td><Button className="solution-button"
                        onClick={() => (
                            setRateSolution(!rateSolution),
                            setSolutionRate(solution))}>
                        Przesłane odpowiedzi</Button></td>
                 </tr>)}
                 </table>
        </div>
    );
}

export default Solutions;