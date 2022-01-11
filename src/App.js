import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./component/Home";
import Chat from "./component/chat/Chat";
import "./App.css";
import ChatProvider from "./Context/ChatProvider";

const App = () => {
  return (
    <Router>
      <ChatProvider>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </ChatProvider>
    </Router>
  );
};

export default App;
