import { ChatProvider, useChat } from "./context/chatContext";
import Contacts from "./components/Contacts";
import ChatList from "./components/ChatList";

function App() {
  const data = useChat();
  console.log(data);
  return (
    <ChatProvider>
      <main className="sm:grid sm:grid-cols-2 gap-4">
        <Contacts />
        <ChatList />
      </main>
    </ChatProvider>
  );
}

export default App;
