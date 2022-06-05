import "./App.css";
import { useState, useEffect } from "react";
import QuestionDropArea from "./components/QuestionDropArea";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import AddQuestionForm from "./components/AddQuestionForm";
import AddTestForm from "./components/AddTestForm";
import MenuBar from "./components/MenuBar";
import React from "react";
import moment from "moment";

function App() {
  const urlAddQuestions = "http://localhost:8080/api/questions";
  const urlAllQuestions = "http://localhost:8080/api/questions/all/";
  const urlAddTest = "http://localhost:8080/api/tests";
  const urlQuestions = "http://localhost:8080/api/questions";
  const urlCourseCodes = "http://localhost:8080/api/courses/all/";
  const [allQuestions, setAllQuestions] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [chosenQuestions, setChosenQuestions] = useState([]);
  const [dateStart, setDateStart] = useState(moment().format());
  const [testName, setTestName] = useState("");
  const [dateEnd, setDateEnd] = useState(moment().format());

  // Load questions from server
  useEffect(() => {
    updateQuestions();
  }, []);

  const fetchQuestions = async () => {
    const res = await fetch(urlAllQuestions);
    return await res.json();
  };

  const updateQuestions = async () => {
    fetchQuestions()
      .then((response) => {
        response.sort((a, b) => b.questionId - a.questionId); // sort by ID
        setQuestions(response);
        setAllQuestions(response);
      })
      .catch((err) => console.log(`could not fetch questions: ${err}`));
  };

  const fetchCourseCodes = async () => {
    const res = await fetch(urlCourseCodes);
    return await res.json();
  };

  const addQuestion = async (question) => {
    const newQuestion = question;
    newQuestion.teacherId = 1;

    await fetch(urlAddQuestions, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newQuestion),
    })
      .then(() => updateQuestions())
      .catch((err) => {
        alert("Nie udało się dodać pytania. Spróbuj ponownie");
        console.log(err);
      });
  };

  const deleteQuestion = async (id) => {
    await fetch(`${urlQuestions}?id=${id}`, {
      method: "DELETE",
    })
      .then(() => updateQuestions())
      .catch((err) => {
        alert("Nie udało się usunąć pytania. Spróbuj ponownie");
        console.log(err);
      });
  };

  const modifyQuestion = async (question) => {
    const newQuestion = question;
    newQuestion.teacherId = 1;

    await fetch(`${urlQuestions}?id=${newQuestion.questionId}`, {
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
    setAllQuestions(updatedQuestions);
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
      name: testName,
    };

    await fetch(urlAddTest, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTest),
    })
      .then(() => alert("Test został pomyślnie przesłany"))
      .catch((err) => {
        alert("Nie udało się przesłać testu. Spróbu ponownie");
        console.log(err);
      });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <MenuBar panelName="Panel nauczyciela" />
        {/*<div className="container tags-box"></div>*/}
        <div className="dragndropArea">
          <div className="container questions existingQuestions">
            <AddQuestionForm
              addQuestion={addQuestion}
              fetchCourseCodes={fetchCourseCodes}
              noQuestions={questions.length}
            />
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
              fetchCourseCodes={fetchCourseCodes}
              allQuestionsArea={true}
            />
          </div>
          <div className="container questions createTest">
            <AddTestForm
              addTest={addTest}
              dateEnd={dateEnd}
              dateStart={dateStart}
              setDateStart={setDateStart}
              setDateEnd={setDateEnd}
              setTestName={setTestName}
              noQuestions={chosenQuestions.length}
            />
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
