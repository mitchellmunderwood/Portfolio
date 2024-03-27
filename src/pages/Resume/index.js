import './index.css';
import React from 'react';
import Body from '../../components/Body/index';
import PDFViewer from '../../components/PDFViewer/index';

function Resume() {
  return (
    <Body>
      <h1 className="resume-title">Resume</h1>
      <PDFViewer />
    </Body>
  );
}

export default Resume;
