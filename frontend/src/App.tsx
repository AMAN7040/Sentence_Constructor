import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import QuestionsPage from "./pages/QuestionsPage";
import FeedBack from "./pages/FeedBack";

const App: React.FC = () => {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/questions" element={<QuestionsPage />} />
          <Route path="/feedback" element={<FeedBack />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
