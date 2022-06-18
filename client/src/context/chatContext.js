import { createContext, useState, useContext } from "react";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [chat, setChat] = useState([
    {
      user: "Olivia",
      profilePic:
        "https://raw.githubusercontent.com/senaoz/Chat-App/master/client/public/images/profil-3.png",
      messages: [
        { text: "Hello", fromMe: true },
        { text: "What's going on?", fromMe: true },
        { text: "Hi 👋 Everything is great, how are u?", fromMe: false },
      ],
      lastMessageTime: 1655572296617, //Date.now()
      active: true,
    },
    {
      user: "Michael",
      profilePic:
        "https://raw.githubusercontent.com/senaoz/Chat-App/master/client/public/images/profil-2.png",
      messages: [
        { text: "Hello", fromMe: true },
        { text: "What's going on?", fromMe: true },
        { text: "Hi 👋 Everything is great, how are u?", fromMe: false },
      ],
      lastMessageTime: 1655572296617,
      active: false,
    },
    {
      user: "John",
      profilePic:
        "https://raw.githubusercontent.com/senaoz/Chat-App/master/client/public/images/profil-6.png",
      messages: [
        { text: "Hello", fromMe: true },
        { text: "What's going on?", fromMe: true },
        { text: "Hi 👋 Everything is great, how are u?", fromMe: false },
      ],
      lastMessageTime: 1655572296617,
      active: false,
    },
  ]);

  const values = {
    chat,
    setChat,
  };

  return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};

export const useChat = () => useContext(ChatContext);
