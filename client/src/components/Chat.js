import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import ChatForm from "./ChatForm";
import { useChat } from "../context/chatContext";

export default function Chat() {
  const Container = styled.div.attrs({
    className:
      "my-6 sm:my-0 p-4 pb-20 border rounded-lg bg-white dark:bg-gray-800 dark:border-none relative",
  })`
    & p,
    h3 {
      ${tw`m-0`}
    }
    .messages {
      max-height: 25em;
      overflow-y: auto;
    }
  `;

  const Message = styled.div.attrs({
    className: "dark:bg-gray-600 bg-gray-200 p-2 mb-2 rounded-lg",
  })`
    ${(props) =>
      props.fromMe === true
        ? "background:#2f96fc; color:white; width: fit-content; margin-left: auto;"
        : "width: fit-content;"}
    & p,
    h3 {
      ${tw`m-0`}
    }
  `;

  const data = useChat().chat;
  console.log("data: ", data);
  const list = [];
  console.log("list: ", list);

  data.map((person) => {
    if (person.active === true) {
      person.messages.map((message) => list.push(message));
    }
  });

  return (
    <Container>
      <section className="messages">
        {list.map((message, index) => (
          <Message key={"message" + index} fromMe={message.fromMe}>
            {message.text}
          </Message>
        ))}
      </section>
      <ChatForm user="Olivia" />
    </Container>
  );
}
