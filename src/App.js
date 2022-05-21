import "./App.css";
import { useState, useEffect } from "react";
import QuestionDropArea from "./components/QuestionDropArea";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import AddQuestionForm from "./components/AddQuestionForm";
import AddTestForm from "./components/AddTestForm";
import React from "react";

function App() {
  const urlAddQuestions = "http://localhost:8080/api/questions";
  const urlClosedQuestions = "http://localhost:8080/api/questions/all/";
  const urlAddTest = "http://localhost:8080/api/tests";
  const urlQuestions = "http://localhost:8080/api/questions";
  const [questions, setQuestions] = useState([]);
  const [chosenQuestions, setChosenQuestions] = useState([]);

  // Load questions from server
  useEffect(() => {
    const getQuestions = async () => {
      const questionsFromServer = await fetchQuestions();
      setQuestions(questionsFromServer);
    };

    getQuestions();
  }, []);

  const fetchQuestions = async () => {
    const res = await fetch(urlClosedQuestions);
    const data = await res.json();
    return data;
  };

  const addQuestion = async (question) => {
    const newQuestion = question;
    newQuestion.courseCode = "A04";
    newQuestion.teacherId = 1;

    const res = await fetch(urlAddQuestions, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newQuestion),
    });
  };

  const deleteQuestion = async (id) => {
    console.log(`Deleting question with id: ${id}`);
    console.log(`${urlQuestions}?id=${id}`);

    const res = await fetch(`${urlQuestions}?id=${id}`, {
      method: "DELETE",
    });
  };

  const moveQuestion = (
    fromList,
    setFromList,
    toList,
    setToList,
    movedQuestion
  ) => {
    const ids = toList.map((q) => q.questionId);
    console.log(ids);
    const isAlreadyOnList = ids.includes(movedQuestion.questionId);
    console.log(`item dragged. has already been there: ${isAlreadyOnList}`);

    if (!isAlreadyOnList) {
      setToList([...toList, movedQuestion]);
      setFromList(
        fromList.filter((q) => q.questionId !== movedQuestion.questionId)
      );
    }
  };

  const addTest = async () => {
    const newTest = {
      questionsId: chosenQuestions.map((q) => q.questionId),
      teacherId: 1,
      endDate: "2018-03-29T13:34:00.000",
      startDate: "2018-03-29T15:34:00.000",
    };

    console.log(`sending data: ${JSON.stringify(newTest)}`);

    const res = await fetch(urlAddTest, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTest),
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        {/*<div className="container tags-box"></div>*/}
        <div className="dragndropArea">
          <div className="container questions existingQuestions">
            <AddQuestionForm addQuestion={addQuestion} />
            <QuestionDropArea
              questions={questions}
              dropFunc={(movedQuestion) =>
                moveQuestion(
                  chosenQuestions,
                  setChosenQuestions,
                  questions,
                  setQuestions,
                  movedQuestion
                )
              }
              deleteQuestion={deleteQuestion}
            />
          </div>
          <div className="container questions createTest">
            <AddTestForm addTest={addTest} />
            <QuestionDropArea
              questions={chosenQuestions}
              dropFunc={(movedQuestion) =>
                moveQuestion(
                  questions,
                  setQuestions,
                  chosenQuestions,
                  setChosenQuestions,
                  movedQuestion
                )
              }
            />
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
