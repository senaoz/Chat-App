import Contacts from "./Contacts";
import ChatList from "./ChatList";

export default function Container() {
  return (
    <main className="sm:grid sm:grid-cols-2 gap-4">
      <Contacts />
      <ChatList />
    </main>
  );
}
