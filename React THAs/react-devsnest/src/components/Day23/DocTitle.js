import React from 'react';
import DocTitle1 from './DocTitle1';
import DocTitle2 from './DocTitle2';
import './DocTitle.css';

function DocTitle() {
  return (
    <div className='doc-container'>
      <h1>Use of custom hook to set document title</h1>
      <DocTitle1 />
      <DocTitle2 />
    </div>
  );
}

export default DocTitle;
