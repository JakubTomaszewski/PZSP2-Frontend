import "./App.css";
import Questions from "./components/Questions";
import AddQuestion from "./components/AddQuestion";
import { useState, useEffect } from "react";
import ChosenQuestions from "./components/ChosenQuestions";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

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

    // const data = await res.json();
    // setQuestions([...questions, data]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <div className="container tags-box"></div>
        <div className='dragndropArea'>
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
            <div className='existingQuestions'>
              {showAddQuestion && <AddQuestion addQuestion={addQuestion} />}
              <Questions questions={questions} />
            </div>
          </div>
          <div className='container questions' >
            <ChosenQuestions />
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
