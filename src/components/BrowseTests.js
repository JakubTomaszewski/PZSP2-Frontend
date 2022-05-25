import React from "react";
import { useState } from "react";
import Test from "./Test"

const BrowseTests = () => {

    const [tests, setTests] = useState([
        {testId: 1, name: "PIPR kolokwium 1", end_date: "24 maja 2022, 9:45", start_date: "24 maja 2022, 8:15", password: "sdw5sd"},
        {testId: 2, name: "PIPR kolokwium 2", end_date: "6 czarwca 2022, 9:45", start_date: "6 czarwca 2022, 8:30", password: "pjt3g4"}
    ])
    return (
        <div className="browseTests">
            <h1>Utworzone testy</h1>
            {tests.map((test) =>
                <Test test={test}></Test>
            )}
        </div>
    );
}

export default BrowseTests;