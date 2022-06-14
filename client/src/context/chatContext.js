import { createContext, useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [chat, setChat] = useState([]);
  const values = {};

  return (
    <ChatContext.Provider values={values}>{children}</ChatContext.Provider>
  );
};
