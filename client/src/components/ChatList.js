import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import ChatForm from "./ChatForm";

export default function ChatList() {
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
      props.sender === "me"
        ? "float:none; background:#2f96fc; color:white;"
        : "none"} /* float:right; */
    & p,
    h3 {
      ${tw`m-0`}
    }
  `;

  return (
    <Container>
      <Message sender="me">Can I call you later?</Message>
      <Message>Ok.</Message>
      <Message sender="me">Thankss ❤️</Message>
      <Message>Are you alright?</Message>
      <Message>Is there any problem?</Message>
      <Message sender="me">Everything is fine️ 👍</Message>
      <ChatForm />
    </Container>
  );
}
