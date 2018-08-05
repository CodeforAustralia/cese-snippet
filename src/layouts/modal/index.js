import React from 'react';
import cx from 'classnames';
import { Button } from 'reactstrap';

import { BodyClass } from 'components/elementClass';
import DocumentOnKeyUp from 'components/documentOnKeyUp';

import style from './style.scss';


const ModalLayout = ({ history, location, children }) => {

  const back = (e) => {
    if (e) {
      e.stopPropagation();
    }
    history.goBack();
  };

  return (
    <div className={style.overlay} tabIndex="-1" role="dialog">
      <BodyClass add={style.noScroll} />
      <DocumentOnKeyUp keyCode={27} onKeyUp={back} />

      <div className={cx(style.modal, style.modalAnimation, 'element-animated"')}>
        <div className={`modal-content ${style.modalContent}`}>
          <div className="modal-header">
            <h5 className="modal-title">New Snippet</h5>
            <Button className="close" color="" aria-label="Close" onClick={back}>
              <span aria-hidden="true">&times;</span>
            </Button>
          </div>
          <div className="modal-body">

            {/*<Form sessionUser={sessionUser}*/}
                  {/*onSubmitSuccess={() => back()} />*/}

            {children}

          </div>
        </div>
      </div>

    </div>
  )
};

export default ModalLayout;
