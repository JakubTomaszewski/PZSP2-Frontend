import {useDrop} from "react-dnd";
import Question from "./Question";

const ChosenQuestions = ({questions, setQuestions}) => {
    const [{}, dropRef] = useDrop({
        accept: 'question',
        drop: (item) => {
            const ids = questions.map(question => question.id)
            console.log(`item dragged. has already been there: ${ids.includes(item.id)}`)
            setQuestions(() => !ids.includes(item.id) ? [...questions, item] : questions)
        }
    })

    return (
        <div className='chosenQuestions' ref={dropRef}>
            <h2> Utwórz test </h2>
            {questions.map((question) => (
                <Question key={question.questionId}
                          id={question.questionId}
                          content={question.content}
                          answers={question.answers} />
            ))}
        </div>
    )
}

export default ChosenQuestions