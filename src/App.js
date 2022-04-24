import logo from "./logo.svg";
import "./App.css";
import Questions from "./components/Questions";
import AddQuestion from "./components/AddQuestion";
import { useState } from "react";

function App() {
  const [showAddQuestion, setShowAddQuestion] = useState(false);
  const urlAddQuestions = "http://localhost:8080/api/questions/save";
  // const urlAddQuestions = "http://localhost:5000/questions";
  const [questions, setQuestions] = useState([]);

  const addQuestion = async (questionText) => {
    const newQuestion = {
      courseCode: "A04",
      type: "c",
      content: questionText,
      teacherId: 1,
      answers: ["Odp1", "Odp2", "Odp3", "Odp4"],
      areCorrect: [true, false, false, false],
    };

    const res = await fetch(urlAddQuestions, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newQuestion),
    });

    const data = await res.json();
    setQuestions([...questions, data]);
  };

  return (
    <div className="App">
      <div className="container tags-box"></div>
      <div className="container questions">
        <header className="header">
          <h2>Pytania</h2>
          <button
            className="add-question-button btn"
            onClick={() => setShowAddQuestion(!showAddQuestion)}
            // showAddQuestion={showAddQuestion}
          >
            Dodaj pytanie
          </button>
        </header>
        {showAddQuestion && <AddQuestion addQuestion={addQuestion} />}
        <Questions questions={questions} />
      </div>
    </div>
  );
}

export default App;
