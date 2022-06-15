import styled from "styled-components";

export default function Contacts() {
  const Title = styled.span.attrs({
    className: "bg-zinc-900 bg-zinc-800 p-4 m-2 rounded-lg w-full",
  })``;

  const Image = styled.img.attrs({
    className: "rounded-full p-1 m-1 w-24",
  })``;

  const people = ["Ali", "Veli", "Aysel", "Sena"];

  return (
    <div>
      {people.map((person, index) => (
        <>
          <span className="flex items-center">
            <Image
              key={index}
              src="https://via.placeholder.com/150"
              alt={person}
            />
            <Title key={index}>
              <span className="grid grid-cols-2">
                <h4 className="m-0">{person}</h4>{" "}
                <p className="m-0 text-right">TIME</p>
              </span>
              <p className="m-0">
                TEXT #YazAlışverişi'ne özel Altınyıldız, Kiğılı, Damat...
              </p>
            </Title>
          </span>
          <hr className="mx-0 my-2" />
        </>
      ))}
    </div>
  );
}
