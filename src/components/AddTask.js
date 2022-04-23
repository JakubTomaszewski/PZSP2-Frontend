import React from "react";

const AddTask = () => {
  return (
    <form className="add-form">
      <div className>
        <label>Treść</label>
        <input type="text" placeholder="Treść pytania"></input>
      </div>
    </form>
  );
};

export default AddTask;
