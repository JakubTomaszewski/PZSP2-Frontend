import React from 'react';
import {useDrop} from "react-dnd";
import Question from "./Question";


const QuestionDropArea = ({questions, dropFunc, deleteQuestion}) => {
    const [{}, dropRef] = useDrop({
        accept: 'question',
        drop: dropFunc
    })

    return (
        <div className='questionDropArea' ref={dropRef}>
            {questions.map((question) => (
                <Question key={question.questionId}
                          questionId={question.questionId}
                          content={question.content}
                          answers={question.answers}
                          deleteQuestion={deleteQuestion} />
            ))}
        </div>
    )
}

export default QuestionDropArea