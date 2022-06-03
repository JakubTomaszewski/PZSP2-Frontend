import React from "react";

const TestPreviw = ({testQuestions}) => {

    function listAnswers(answers) {
        return (
            <ul>
                {answers.map((answer) =>
                    <li key={answer.answerId}>
                        {answer.content} </li>)}
            </ul>
        )
    };

    function showAnswers(type, answers) {
        if (type === "o") return (<p>Pytanie otwarte</p>)
        else return (listAnswers(answers))
    };

    return (
        <div className="testPreview">
            <table className="testPreview-table">
                <tr>
                    <th>Pytanie</th>
                    <th>Odpowiedzi</th>
                </tr>
                {testQuestions.map((questionInfo) =>
                <tr>
                    <td>{questionInfo.question.content}</td>
                    <td>{showAnswers(
                        questionInfo.question.type,
                        questionInfo.question.answers)}
                    </td>
                </tr>)}
            </table>
        </div>
    );

}

export default TestPreviw;