import AddQuestion from "./AddQuestion";
import {useState} from "react";

const AddQuestionForm = ({addQuestion}) => {
    const [showAddQuestion, setShowAddQuestion] = useState(false);

    return (
        <div className="header">
            <h2>Pytania</h2>
            <button
                className="add-question-button btn"
                onClick={() => setShowAddQuestion(!showAddQuestion)}
                // showAddQuestion={showAddQuestion}
            >
                Dodaj pytanie
            </button>
            {showAddQuestion && <AddQuestion addQuestion={addQuestion} />}
        </div>
    )
}

export default AddQuestionForm