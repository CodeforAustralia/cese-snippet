import React from 'react';
import {
  CreateForm,
  UpdateForm,
} from './../components/programForm';

const CreateProgramModal = ({ history, location }) => {

  const isEdit = location.state && location.state.isEdit || false;

  const back = (e) => {
    if (e) {
      e.stopPropagation();
    }
    history.goBack();
  };

  const Form = isEdit ? UpdateForm : CreateForm;

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

        <Form onSubmitSuccess={() => back()} />

        <div>
          <button type="button" onClick={back}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProgramModal;
