import React from "react";
import "./App.css";

// Child Component
function Student(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Course: {props.course}</p>
    </div>
  );
}

// Parent Component
function App() {
  return (
    <div className="container">
      <h1>React Props Example</h1>

      <Student name="Mihir" age="20" course="React JS" />
      <Student name="Rahul" age="22" course="Web Development" />
      <Student name="Priya" age="21" course="JavaScript" />
    </div>
  );
}

export default App;