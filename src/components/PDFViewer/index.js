import React from 'react';
import pdf from './resume.pdf';
import './index.css';

function PDFViewer() {
  return <iframe className="iframe" src={pdf} />;
}

export default PDFViewer;
