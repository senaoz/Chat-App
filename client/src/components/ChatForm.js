import { useState } from "react";
import { useChat } from "../context/chatContext";
import { SendMessage } from "../socketAPI";

export default function ChatForm(props) {
  const [message, setMessage] = useState("");
  const { setChat } = useChat();
  const data = useChat().chat;

  const handleSubmit = (e) => {
    e.preventDefault();

    let newData = data.map((obj) => {
      // If the ID matches then update the value
      if (obj.user === e.target.id) {
        console.log("obj.user: ", obj.user);
        return {
          ...obj,
          messages: [...obj.messages, { text: message, fromMe: true }],
        };
      }
      // else return the same object
      return obj;
    });

    setChat(newData);

    SendMessage(message);
    setMessage("");
  };

  return (
    <form
      className="w-full flex flex-col"
      onSubmit={handleSubmit}
      id={props.user}
    >
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
