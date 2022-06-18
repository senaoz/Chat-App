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
        return {
          ...obj,
          user: obj.user,
          profilePic: obj.profilePic,
          messages: [
            ...obj.messages,
            { text: message, fromMe: true, time: Date.now() },
          ],
          lastMessageTime: Date.now(),
        };
      }
      // else return the same object
      return obj;
    });

    setChat(newData);
    SendMessage(e.target.id, message);
    setMessage("");
  };

  return (
    <form
      className="absolute bottom-4 right-4 left-4 flex flex-col"
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
