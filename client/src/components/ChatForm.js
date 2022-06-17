import { useState } from "react";
import { useChat } from "../context/chatContext";

export default function ChatForm() {
  const [message, setMessage] = useState("");

  //const { setMessages } = useChat();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);

    //setMessages((prevState) => [...prevState, { message, fromMe: true }]);
    //sendMessage(message);
    setMessage("");
  };

  return (
    <form className="w-full flex flex-col" onSubmit={handleSubmit}>
      <input
        type="text"
        name="chatbox"
        className="p-4 border rounded-lg bg-gray-200 dark:bg-gray-800"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
    </form>
  );
}
