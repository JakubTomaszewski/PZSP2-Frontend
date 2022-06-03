import React, {useState, useEffect} from "react";
import Test from "./components/Test"

const BrowseTests = () => {

  const urlAllTests = `http://localhost:8080/api/tests/all`;
  const [tests, setTests] = useState()

  // Load tests from server
  const fetchTests = async () => {
    try {
      const res = await fetch(urlAllTests)
      return await res.json()
    } catch {return {}}
  };

  useEffect(() => {
    const getTests = async () => {
      const testsFromServer = await fetchTests();
      setTests(testsFromServer)
    };
    getTests();
  }, [])

    return (
        <div className="browseTests">
            <h1>Utworzone testy</h1>
            <a href="/">powrót</a>
            { tests && tests.map((test) =>
                <Test test={test}></Test>
            )}
        </div>
    );
}

export default BrowseTests;