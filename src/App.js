import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ReactFCCtest from 'react-fcctest';
import PomodoroClock from "./features/pomodoro-clock/PomodoroClock";

function App() {
  return (
    <div className="App">
        <ReactFCCtest />
        <PomodoroClock />
    </div>
  );
}

export default App;
