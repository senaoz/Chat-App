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
      <div className="sm:grid sm:grid-cols-2 gap-4">
        <Contacts />
        <Chat />
      </div>
    </ChatProvider>
  );
}

export default App;
