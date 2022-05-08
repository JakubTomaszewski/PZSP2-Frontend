import {useDrop} from "react-dnd";
import Question from "./Question";

const QuestionDropArea = ({questions, dropFunc}) => {
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
                          answers={question.answers} />
            ))}
        </div>
    )
}

export default QuestionDropArea