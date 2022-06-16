import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Container } from "postcss";

export default function Contacts() {
  const Image = styled.img.attrs({
    className: "rounded-full p-1 m-1 w-20 sm:w-22",
  })``;

  const Container = styled.div.attrs({
    className:
      "flex items-center py-2 border-b-2 border-gray-200 dark:border-gray-800",
  })``;

  const people = ["Ali", "Veli", "Aysel", "Sena"];

  const MessageCard = styled.span.attrs({
    className: "dark:bg-gray-800 bg-white p-4 m-1 rounded-lg w-full",
  })`
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
            key={index}
            src="https://via.placeholder.com/150"
            alt={person}
          />
          <MessageCard key={index}>
            <span className="grid grid-cols-2">
              <h3>{person}</h3>
              <p className="text-right">TIME</p>
            </span>
            <p>TEXT #YazAlışverişi'ne özel Altınyıldız, Kiğılı, Damat...</p>
          </MessageCard>
        </Container>
      ))}
    </div>
  );
}
