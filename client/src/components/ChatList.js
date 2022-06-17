import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import ChatForm from "./ChatForm";
import { useChat } from "../context/chatContext";

export default function ChatList() {
  const data = useChat().chat;

  const Container = styled.div.attrs({
    className:
      "m-30 p-4 border rounded-lg bg-white dark:bg-gray-800 dark:border-none overflow-y-auto max-h-screen",
  })`
    & p,
    h3 {
      ${tw`m-0`}
    }
  `;

  const Message = styled.div.attrs({
    className: "dark:bg-gray-600 bg-gray-200 p-2 mb-2 rounded-lg table",
  })`
    ${(props) =>
      props.fromMe === "true"
        ? "float:none; background:#2f96fc; color:white;"
        : "none"} /* float:right; */
    & p,
    h3 {
      ${tw`m-0`}
    }
  `;

  return (
    <Container>
      {data.map((person, index) => {
        if (person.active === true) {
          person.messages.map((message, index) => {
            console.log("message: ", index, message.text);
            return (
              <Message key={"message" + index} fromMe={message.fromMe}>
                {message.text}
              </Message>
            );
          });
        }
      })}
      <ChatForm user="Olivia" />
    </Container>
  );
}
