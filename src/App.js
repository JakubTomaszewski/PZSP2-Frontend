import logo from "./logo.svg";
import "./App.css";
import Questions from "./components/Questions";
import AddQuestion from "./components/AddQuestion";
import { useState, useEffect } from "react";
import React from 'react';


function App() {
  const [showAddQuestion, setShowAddQuestion] = useState(false);
  const urlAddQuestions = "http://localhost:8080/api/questions/save";
  const urlQuestions = "http://localhost:8080/api/questions/all/closed";
  // const urlAddQuestions = "http://localhost:5000/questions";
  const [questions, setQuestions] = useState([]);

  // Load questions from server
  useEffect(() => {
    const getQuestions = async () => {
      const questionsFromServer = await fetchQuestions();
      setQuestions(questionsFromServer);
    };

    getQuestions();
  }, []);

  const fetchQuestions = async () => {
    const res = await fetch(urlQuestions);
    const data = await res.json();
    return data;
  };

  const addQuestion = async (question) => {
    const newQuestion = {
      courseCode: "A04",
      type: "c",
      content: question.content,
      teacherId: 1,
      answers: question.answers,
      areCorrect: question.areCorrect,
    };

    const res = await fetch(urlAddQuestions, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newQuestion),
    });
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
