import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <h1 className="text-center text-4xl p-4">Sentence Construction Quiz</h1>

        <Routes>
         
        </Routes>
      </div>
    </Router>
  );
};

export default App;
