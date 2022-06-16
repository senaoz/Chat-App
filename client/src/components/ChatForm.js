import tw from "twin.macro";
import styled from "styled-components";
import { useState } from "react";

export default function ChatForm() {
  const Form = styled.form.attrs({
    className: "w-full flex flex-col",
  })`
    input {
      ${tw`p-4 border rounded-lg bg-gray-200 dark:bg-gray-800`}
    }
  `;

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);

    setMessage("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
    </Form>
  );
}
