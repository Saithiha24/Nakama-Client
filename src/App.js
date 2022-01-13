import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./component/Home";
import Chat from "./component/chat/Chat";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
};

export default App;
