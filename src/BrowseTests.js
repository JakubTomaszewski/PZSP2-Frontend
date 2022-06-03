import React, {useState, useEffect} from "react";
import MenuBarBrowseTests from "./components/MenuBarBrowseTests";
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
      testsFromServer.sort( function(a,b) { return b.testId - a.testId; })
      setTests(testsFromServer)
    };
    getTests();
  }, [])

    return (
      <div>
        <MenuBarBrowseTests/>
        <div className="browseTests">
          <h1>Utworzone testy</h1>
          { tests && tests.map((test) =>
              <Test test={test}></Test>
          )}
        </div>
      </div>
    );
}

export default BrowseTests;