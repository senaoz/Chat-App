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
        { text: "Hi", fromMe: true },
        { text: "Hi 👋 How are u?", fromMe: false },
      ],
      lastMessageTime: "11:53",
      active: true,
    },
    {
      user: "Michael",
      profilePic:
        "https://raw.githubusercontent.com/senaoz/Chat-App/master/client/public/images/profil-2.png",
      messages: [
        { text: "Hello", fromMe: true },
        { text: "Hi", fromMe: true },
        { text: "Hi 👋 How are u?", fromMe: false },
      ],
      lastMessageTime: "Yesterday",
      active: false,
    },
    {
      user: "John",
      profilePic:
        "https://raw.githubusercontent.com/senaoz/Chat-App/master/client/public/images/profil-6.png",
      messages: {
        1: { text: "Hello", fromMe: true },
        2: { text: "Hi", fromMe: true },
        3: { text: "Hi 👋 How are u?", fromMe: false },
      },
      lastMessageTime: "15 June 2022",
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
