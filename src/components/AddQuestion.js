import { useState } from "react";
import React from 'react';

const AddQuestion = ({ addQuestion }) => {
  const [text, setText] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    if (!text) {
      alert("Proszę dodać treść pytania");
      return;
    }

    addQuestion(text);

    setText("");
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div>
        <label>Treść</label>
        <input
          type="text"
          placeholder="Treść pytania"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <input
          className="save-question-btn"
          type="submit"
          value="Zapisz"
          // onClick={() => addQuestion(text)}
        ></input>
      </div>
    </form>
  );
};

export default AddQuestion;
