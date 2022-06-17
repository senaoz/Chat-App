import { useState } from "react";
import { useChat } from "../context/chatContext";
import { SendMessage } from "../socketAPI";

export default function ChatForm() {
  const [message, setMessage] = useState("");

  const { setChat } = useChat();

  console.log(useChat().chat);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);

    setChat((prevState) => [
      ...prevState,
      (prevState[0].messages[prevState[0].messages.length] = {
        text: message,
        fromMe: true,
      }),
    ]);
    SendMessage(message);
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
