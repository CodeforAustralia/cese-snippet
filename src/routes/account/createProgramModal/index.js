import React from 'react';
import cx from 'classnames';
import { BodyClass } from 'components/elementClass';
import DocumentOnKeyUp from 'components/documentOnKeyUp';
import { Button } from 'reactstrap';

import {
  CreateForm,
  UpdateForm,
} from './../components/programForm';
import style from './style.scss';


const CreateProgramModal = ({ history, location, sessionUser }) => {

  const isEdit = location.state && location.state.isEdit || false;

  const back = (e) => {
    if (e) {
      e.stopPropagation();
    }
    history.goBack();
  };

  const Form = isEdit ? UpdateForm : CreateForm;

  return (
    <div className={cx(style.overlay)} tabIndex="-1" role="dialog">

      <BodyClass add={style.noScroll} />
      <DocumentOnKeyUp keyCode={27} onKeyUp={back} />

      <div className={cx(style.modal, style.modalAnimation, 'element-animated"')}>
        <div className={`modal-content ${style.modalContent}`}>
          <div className="modal-header">
            <h5 className="modal-title">{isEdit ? 'Update Program' : 'Add a Program'}</h5>
            <Button className="close" color="" aria-label="Close" onClick={back}>
              <span aria-hidden="true">&times;</span>
            </Button>
          </div>
          <div className="modal-body">
            <p>Tell us about a school program in a nutshell, or be as detailed as you want.</p>
            <p className="mb-4">Contributing to the list of program in your school is the first step in helping create awareness about your programs and initiatives for the school community.</p>

            <Form sessionUser={sessionUser}
              onSubmitSuccess={() => back()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProgramModal;