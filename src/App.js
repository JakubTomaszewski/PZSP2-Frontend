import logo from "./logo.svg";
import "./App.css";
import Questions from "./components/Questions";
import Question from "./components/Question";
import { useState, useEffect } from "react";

function App() {
  const urlQuestions = "http://localhost:8080/api/questions/all/closed";
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const getQuestions = async () => {
      const questionsFromServer = await fetchQuestions();
      console.log(questionsFromServer);
      setQuestions(questionsFromServer);
    };

    getQuestions();
  }, []);

  const fetchQuestions = async () => {
    const res = await fetch(urlQuestions);
    const data = await res.json();
    return data;
  };

  return (
    <div className="App">
      <div className="container tags-box"></div>
      <div className="container questions">
        <h2>Questions</h2>
        <Questions questions={questions} />
      </div>
    </div>
  );
}

export default App;
