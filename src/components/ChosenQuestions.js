import {useDrop} from "react-dnd";
import Question from "./Question";

const ChosenQuestions = ({questions, setQuestions, chosenQuestions, setChosenQuestions}) => {
    const [{}, dropRef] = useDrop({
        accept: 'question',
        drop: (question) => {
            const ids = chosenQuestions.map(question => question.questionId)
            console.log(ids)
            console.log(`item dragged. has already been there: ${ids.includes(question.questionId)}`)
            setChosenQuestions(() => !ids.includes(question.questionId) ? [...chosenQuestions, question] : chosenQuestions)
            // setQuestions(questions.filter( question => question.questionId !== item.id))
        }
    })

    return (
        <div className='chosenQuestions' ref={dropRef}>
            <h2> Utwórz test </h2>
            {chosenQuestions.map((question) => (
                <Question key={question.questionId}
                          questionId={question.questionId}
                          content={question.content}
                          answers={question.answers} />
            ))}
        </div>
    )
}

export default ChosenQuestions