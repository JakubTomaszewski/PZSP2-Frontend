import React from "react";
import { useState } from "react";
import Test from "./Test"

const BrowseTests = ({tests}) => {

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