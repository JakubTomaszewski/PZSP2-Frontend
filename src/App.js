import "./App.css";
import { useState, useEffect } from "react";
import QuestionDropArea from "./components/QuestionDropArea";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import AddQuestionForm from "./components/AddQuestionForm";
import AddTestForm from "./components/AddTestForm";
import React from "react";
import moment from "moment";

function App() {
  const urlAddQuestions = "http://localhost:8080/api/questions";
  const urlClosedQuestions = "http://localhost:8080/api/questions/all/";
  const urlAddTest = "http://localhost:8080/api/tests";
  const urlQuestions = "http://localhost:8080/api/questions";
  const [questions, setQuestions] = useState([]);
  const [chosenQuestions, setChosenQuestions] = useState([]);
  const [dateStart, setDateStart] = useState (moment().format())
  const [dateEnd, setDateEnd] = useState (moment().format())

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
    const res = await fetch(`${urlQuestions}?id=${id}`, {
      method: "DELETE",
    });
  };

  const modifyQuestion = async (question) => {
    const newQuestion = question;
    newQuestion.courseCode = "A04";
    newQuestion.teacherId = 1;

    const res = await fetch(`${urlQuestions}?id=${newQuestion.questionId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newQuestion),
    })
      .then((response) => response.json())
      .then((modifiedQuestion) => replaceQuestion(modifiedQuestion));
  };

  const replaceQuestion = (updatedQuestion) => {
    const updatedQuestionIndex = questions.findIndex((question) => {
      return question.questionId === updatedQuestion.questionId;
    });
    const updatedQuestions = [...questions];
    updatedQuestions[updatedQuestionIndex] = updatedQuestion;
    setQuestions(updatedQuestions);
  };

  const moveQuestion = (
    fromList,
    setFromList,
    toList,
    setToList,
    movedQuestion
  ) => {
    const ids = toList.map((q) => q.questionId);
    const isAlreadyOnList = ids.includes(movedQuestion.questionId);

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
      endDate: dateEnd,
      startDate: dateStart,
    };

    console.log(JSON.stringify(newTest))

    const res = await fetch(urlAddTest, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTest),
    })
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
              modifyQuestion={modifyQuestion}
            />
          </div>
          <div className="container questions createTest">
            <AddTestForm
              addTest={addTest}
              dateEnd={dateEnd}
              dateStart={dateStart}
              setDateStart={setDateStart}
              setDateEnd={setDateEnd} />
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
