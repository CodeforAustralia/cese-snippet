import React from 'react';
import {
  Badge,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Link as RRLink } from 'react-router-dom';

import Layout from "layouts/modal";
import Form from './../snippetsNew/form';
import { BodyClass } from 'components/elementClass';
import DocumentOnKeyUp from 'components/documentOnKeyUp';

import style from './../snippetsNew/style.scss';


const SnippetsNewModal = ({ history, schoolCode, year, programId }) => {

  const goBack = () => history.goBack();

  return (
    <Layout goBack={goBack}>

      <BodyClass add={style.noScroll} />
      <DocumentOnKeyUp keyCode={27} onKeyUp={goBack} />

      <div>
        <p className="mb-4">Tell us something amazing that happened in this program.</p>

        <div className="card">
          <div className="card-header">
            <Nav pills className="card-header-pills">
              <NavItem>
                <NavLink tag={RRLink} to="#" className={style.altActiveStyle} active>Photo</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRLink} to="#" disabled>Worksheet <sup><Badge>Beta</Badge></sup></NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRLink} to="#" disabled>Applaud <sup><Badge>Beta</Badge></sup></NavLink>
              </NavItem>
            </Nav>
          </div>
          <div className="card-body">
            <Form programId={programId}
                  schoolCode={schoolCode}
                  year={year}
                  onSubmitSuccess={goBack}
            />
          </div>
        </div>

      </div>
    </Layout>
  )
};

export default SnippetsNewModal;
