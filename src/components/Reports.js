import { Grid } from "@mui/material";
import React from "react";

const Solutions = (props) => {
    const testId = props.testId

    const [solutions, setSolutions] = useState([
        {studentName: "Kamil", studentSurname: "Kot", studentId:"103103"},
        {studentName: "Andrzej", studentSurname: "Robak", studentId:"567234"}
    ])
    return (
        <div className="solutions">
            {solutions.map((solution) =>
            <Grid className="solutions-grid">
                <p>{solution.studentName}</p>
                <p>{solution.studentSurname}</p>
                <p>{solution.studentId}</p>
            </Grid>)}
        </div>
    );
}

export default Solutions;