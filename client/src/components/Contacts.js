import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

export default function Contacts() {
  const Image = styled.img.attrs({
    className: "rounded-full p-1 m-1 w-20 sm:w-22",
  })``;

  const Container = styled.div.attrs({
    className:
      "flex items-center py-2 border-b-2 border-gray-200 dark:border-gray-800",
  })``;

  const people = [
    {
      user: "Olivia",
      profilePic:
        "https://raw.githubusercontent.com/senaoz/Chat-App/master/client/public/images/profil-3.png?token=GHSAT0AAAAAABVW3OPTOPEAULYQTYE722SYYVMME2A",
      messages: {
        1: { text: "Hello", sender: "me" },
        2: { text: "Hi", sender: "me" },
        3: { text: "Hi 👋 How are u?", sender: "his/her" },
      },
      lastMessageTime: "11:53",
      active: true,
    },
    {
      user: "Michael",
      profilePic:
        "https://raw.githubusercontent.com/senaoz/Chat-App/master/client/public/images/profil-5.png?token=GHSAT0AAAAAABVW3OPTPHDMGWOLQ3ROLE5KYVMMDAQ",
      messages: {
        1: { text: "Hello", sender: "me" },
        2: { text: "Hi", sender: "me" },
        3: { text: "Hi 👋 How are u?", sender: "his/her" },
      },
      lastMessageTime: "15 June 2022",
      active: false,
    },
    {
      user: "John",
      profilePic:
        "https://raw.githubusercontent.com/senaoz/Chat-App/master/client/public/images/profil-5.png?token=GHSAT0AAAAAABVW3OPTPHDMGWOLQ3ROLE5KYVMMDAQ",
      messages: {
        1: { text: "Hello", sender: "me" },
        2: { text: "Hi", sender: "me" },
        3: { text: "Hi 👋 How are u?", sender: "his/her" },
      },
      lastMessageTime: "Yesterday",
      active: false,
    },
  ];
  console.log(people);

  const MessageCard = styled.span.attrs({
    className: "dark:bg-gray-800 bg-white p-4 m-1 rounded-lg w-full",
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

  return (
    <div>
      {people.map((person, index) => (
        <Container>
          <Image
            key={"img" + index}
            src={person.profilePic}
            alt={person.user}
          />
          <MessageCard key={"message" + index} active={person.active}>
            <span className="grid grid-cols-2">
              <h3>{person.user}</h3>
              <p className="text-right">{person.lastMessageTime}</p>
            </span>
            <p>TEXT</p>
          </MessageCard>
        </Container>
      ))}
    </div>
  );
}
