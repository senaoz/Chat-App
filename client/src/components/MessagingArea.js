import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

export default function MessagingArea() {
  const Container = styled.div.attrs({
    className:
      "m-30 p-4 border rounded-lg bg-white dark:bg-gray-800 dark:border-none overflow-y-auto max-h-screen",
  })`
    & p,
    h3 {
      ${tw`m-0`}
    }
  `;

  const Form = styled.form.attrs({
    className: "m-0",
  })`
    & input {
      ${tw`w-full p-4 dark:bg-gray-800 bg-gray-100 border dark:border-gray-500 rounded-lg mt-2`}
    }
  `;

  const Message = styled.div.attrs({
    className: "dark:bg-gray-600 bg-gray-200 p-2 mb-2 rounded-lg table",
  })`
    ${(props) =>
      props.sender == 0
        ? ""
        : "float:none; background:#2f96fc; color:white;"} /* float:right; */
    & p,
    h3 {
      ${tw`m-0`}
    }
  `;
  return (
    <Container>
      <Message sender="1">Can I call you later?</Message>
      <Message sender="0">Ok.</Message>
      <Message sender="1">Thankss ❤️</Message>
      <Message sender="0">Are you alright?</Message>
      <Message sender="0">Is there any problem?</Message>
      <Message sender="1">Everything is fine️ 👍</Message>

      <Form>
        <input type="text" placeholder="Type a message..." />
      </Form>
    </Container>
  );
}
