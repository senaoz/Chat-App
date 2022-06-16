import tw from "twin.macro";
import styled from "styled-components";

export default function ChatForm() {
  const Form = styled.form.attrs({
    className: "w-full flex flex-col",
  })`
    input {
      ${tw`p-4 border rounded-lg bg-gray-200 dark:bg-gray-800`}
    }
  `;

  return (
    <Form>
      <input type="text" placeholder="Type a message..." />
    </Form>
  );
}
