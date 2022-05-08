import "./App.css";
import { useState, useEffect } from "react";
import QuestionDropArea from "./components/QuestionDropArea";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import AddQuestionForm from "./components/AddQuestionForm";
import AddTestForm from "./components/AddTestForm";

function App() {
  const urlAddQuestions = "http://localhost:8080/api/questions/save";
  const urlQuestions = "http://localhost:8080/api/questions/all/closed";
  // const urlAddQuestions = "http://localhost:5000/questions";
  const [questions, setQuestions] = useState([]);
  const [chosenQuestions, setChosenQuestions] = useState([])

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

  const moveQuestion = (fromList, setFromList, toList, setToList, movedQuestion) => {
    const ids = toList.map(q => q.questionId)
    console.log(ids)
    const isAlreadyOnList = ids.includes(movedQuestion.questionId)
    console.log(`item dragged. has already been there: ${isAlreadyOnList}`)

    if (!isAlreadyOnList) {
      setToList([...toList, movedQuestion])
      setFromList(fromList.filter( q => q.questionId !== movedQuestion.questionId))
    }
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        {/*<div className="container tags-box"></div>*/}
        <div className='dragndropArea'>
          <div className="container questions existingQuestions">
            <AddQuestionForm addQuestion={addQuestion} />
            <QuestionDropArea
                questions={questions}
                dropFunc={(movedQuestion) =>
                    moveQuestion(chosenQuestions, setChosenQuestions, questions, setQuestions, movedQuestion)}
            />
          </div>
          <div className='container questions createTest' >
            <AddTestForm />
            <QuestionDropArea
                questions={chosenQuestions}
                dropFunc={(movedQuestion) =>
                    moveQuestion(questions, setQuestions, chosenQuestions, setChosenQuestions, movedQuestion)}
            />
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
