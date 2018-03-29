import React from 'react';
import { CreateForm } from './../components/programForm';

const CreateProgramModal = ({ history }) => {
  const back = (e) => {
    if (e) {
      e.stopPropagation();
    }
    history.goBack();
  };
  return (
    <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "rgba(0, 0, 0, 0.15)"
      }}
    >
      <div
        className="modal"
        style={{
          position: "absolute",
          background: "#fff",
          top: 25,
          left: "10%",
          right: "10%",
          padding: 15,
          border: "2px solid #444",
          display: "block",
        }}
      >
        <h1>Create program modal</h1>

        <CreateForm onSubmitSuccess={() => back()} />

        <div style={{border: '1px solid orange'}}>
          <button type="button" onClick={back}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProgramModal;
