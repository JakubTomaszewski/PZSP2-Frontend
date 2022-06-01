import React from "react";
import Test from "./Test"

const BrowseTests = ({tests}) => {

    return (
        <div className="browseTests">
            <h1>Utworzone testy</h1>
            <a href="/">powrót</a>
            {tests.map((test) =>
                <Test test={test}></Test>
            )}
        </div>
    );
}

export default BrowseTests;