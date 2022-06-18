import { ChatProvider } from "./context/chatContext";
import Contacts from "./components/Contacts";
import Chat from "./components/Chat";
import { init } from "./socketAPI";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    init();
  }, []);

  return (
    <ChatProvider>
      <Contacts />
      <Chat />
    </ChatProvider>
  );
}

export default App;
