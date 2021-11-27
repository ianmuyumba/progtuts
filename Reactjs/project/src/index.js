import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ReactDOM.render(
//  React.createElement("h1", { style: {color: "red"} }, "Hello Everyone!"),
//   document.getElementById('root')
// );

// ReactDOM.render(
//   React.createElement(
//     "ul",
//     null,
//     React.createElement("li", null, "Monday"),
//     React.createElement("li", null, "Tuesday"),
//     React.createElement("li", null, "Wednesday"),
//     React.createElement("li", null, "Thursday"),
//     React.createElement("li", null, "Friday"),
//   ),
//    document.getElementById('root')
//  );

//  Alternative to the above is using JSX i.e JavaScript in XML

ReactDOM.render(

  <ul>
    <li>Monday</li>
    <li>Tuesday</li>
    <li>Wednesday</li>
    <li>Thursday</li>
    <li>Friday</li>
  </ul>,
   document.getElementById('root')
 );