import React from 'react';

const AddTestForm = ({addTest}) => {
    return (
        <div className="header">
            <h2>Utwórz test</h2>
            <button
                className="add-question-button btn"
                onClick={addTest}
            >
                Wyślij
            </button>
        </div>
    )
}

export default AddTestForm