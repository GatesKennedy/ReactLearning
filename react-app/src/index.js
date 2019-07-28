import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hello There...</h1>;
    // console.log(element);

//  Render Element (Not Component)
ReactDOM.render(element, document.getElementById('root'));
    //  References the root <div> from ../public/index.html
