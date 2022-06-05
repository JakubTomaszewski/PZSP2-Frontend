import React from "react";
import { useState } from "react";
import { useDrop } from "react-dnd";
import Question from "./Question";
import CourseSwitch from "./CourseSwitch";

const QuestionDropArea = ({
  questions,
  dropFunc,
  deleteQuestion,
  modifyQuestion,
  fetchCourseCodes,
  allQuestionsArea,
}) => {
  const [courseCode, setCourseCode] = useState("");
  const [courseCodeList, setCourseCodeList] = useState([]);
  const [{}, dropRef] = useDrop({
    accept: "question",
    drop: dropFunc,
  });

  function handleCourseSelect(event) {
    setCourseCode(event.target.value);
  }

  const getCourseCodes = async () => {
    let courseCodes = await fetchCourseCodes();
    setCourseCodeList(courseCodes);
  };

  return (
    <div className="questionDropArea" ref={dropRef}>
      <div className="filters">
        {allQuestionsArea && (
          <div>
            <p>Filtry</p>
            <CourseSwitch
              courseCode={courseCode}
              handleCourseSelect={handleCourseSelect}
              getCourseCodes={getCourseCodes}
              courseCodeList={courseCodeList}
            />
          </div>
        )}
      </div>
      {!courseCode
        ? questions.map((question) => (
            <Question
              key={question.questionId}
              questionId={question.questionId}
              type={question.type}
              content={question.content}
              answers={question.answers}
              deleteQuestion={deleteQuestion}
              modifyQuestion={modifyQuestion}
            />
          ))
        : questions
            .filter((q) => q["course"]["courseCode"] === courseCode)
            .map((question) => (
              <Question
                key={question.questionId}
                questionId={question.questionId}
                type={question.type}
                content={question.content}
                answers={question.answers}
                deleteQuestion={deleteQuestion}
                modifyQuestion={modifyQuestion}
              />
            ))}
    </div>
  );
};

export default QuestionDropArea;
