import React from 'react';

import './slide.css';

const headingStyle ={
    fontSize: '4em'
};

const bodyStyle ={
    fontSize:'2.5em'
};

const el = {
   <div className ="slide">
    <h1 style={headingStyle}>Styling in React</h1>
    <hr />
    <ul style={bodyStyle}>
        <li>You can style using css classes</li>
        <li>You can style using inline styles</li>
    </ul>
   </div>
};

export default el;