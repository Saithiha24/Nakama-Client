import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const chatContext = createContext();

const ChatProvider = ({ Children }) => {
  const [user, setuser] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.stringify(localStorage.getItem("userInfo"));
    setuser(user);
    if (!user) navigate("/");
  }, [navigate]);
  return (
    <chatContext.Provider value={{ user, setuser }}>
      {Children}
    </chatContext.Provider>
  );
};
export const ChatState = () => {
  return useContext(chatContext);
};

export default ChatProvider;
