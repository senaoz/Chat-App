import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { useChat } from "../context/chatContext";

export default function Contacts() {
  const Image = styled.img.attrs({
    className: "rounded-full p-1 m-1 w-20 sm:w-22",
  })``;

  const Container = styled.div.attrs({
    className: "flex items-center border-gray-200 dark:border-gray-800",
  })`
    ${(props) => {
      if (props.index === people.length - 1) return tw`pt-2`;
      if (props.index === 0) return tw`pb-2`;
      else return tw`py-2`;
    }}
  `;

  const people = useChat().chat;

  const MessageCard = styled.span.attrs({
    className: "dark:bg-gray-800 bg-white p-4 rounded-lg w-full",
  })`
    ${(props) =>
      props.active === true
        ? tw`dark:bg-gray-600 border border-2 border-blue-500 dark:border-none`
        : " "}

    & p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      ${tw`m-0`}
    }
  `;

  function MessageTime(messageTime) {
    const theDate = new Date(messageTime);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (
      theDate.toLocaleString().split(",")[0] ===
      today.toLocaleString().split(",")[0]
    ) {
      return theDate.getHours().toLocaleString() + ":" + theDate.getMinutes();
    } else if (
      theDate.toLocaleString().split(",")[0] ===
      yesterday.toLocaleString().split(",")[0]
    ) {
      return "Yesterday";
    } else {
      return theDate
        .toLocaleString("tr-TR", {
          timeZone: "UTC",
        })
        .split(" ")[0];
    }
  }

  return (
    <div className="flex flex-col divide-y">
      {people.map((person, index) => (
        <Container key={"Message Card " + index} index={index}>
          <Image
            key={"img" + index}
            src={person.profilePic}
            alt={person.user}
          />
          <MessageCard key={"message" + index} active={person.active}>
            <span className="grid grid-cols-2">
              <h3>{person.user}</h3>
              <p className="text-right">
                {MessageTime(person.lastMessageTime)}
              </p>
            </span>
            <p>{person.messages[person.messages.length - 1].text}</p>
          </MessageCard>
        </Container>
      ))}
    </div>
  );
}
