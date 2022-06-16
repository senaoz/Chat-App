import { createContext, useState, useContext } from "react";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [chat, setChat] = useState([
    {
      user: "Betül Oz",
      profilePic: "/public/images/profil-4.png",
      messages: {
        1: { text: "Hello", sender: "me" },
        2: { text: "Hi", sender: "me" },
        3: { text: "Hi 👋 How are u?", sender: "his/her" },
      },
    },
    {
      user: "Sena Oz",
      profilePic: "/public/images/profil-3.png",
      messages: {
        1: { text: "Hello", sender: "me" },
        2: { text: "Hi", sender: "me" },
        3: { text: "Hi 👋 How are u?", sender: "his/her" },
      },
    },
  ]);

  const values = {
    chat,
    setChat,
  };

  return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};

export const useChat = () => useContext(ChatContext);
