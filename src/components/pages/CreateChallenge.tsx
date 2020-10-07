import React from 'react';

function CreateChallenge() {
  return(
    <div className="create-challenge">
      <div className="create-challenge__form">
        <div className="create-challenge__form--input">
          <input type="text" placeholder="Write your task, please." id="context" />
        </div>
        <div className="create-challenge__form--input">
          <select id="author">
            <option value="1">Valery</option>
            <option value="2">Darkwoolf</option>
          </select>
        </div>
        <div className="create-challenge__form--input">
          <button className="btn-block">Create challenge</button>
        </div>
      </div>
    </div>
  );
}

export default CreateChallenge;
