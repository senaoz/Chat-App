import Contacts from "./components/Contacts";
import MessagingArea from "./components/MessagingArea";

function App() {
  return (
    <div className="App sm:grid sm:grid-cols-2 gap-4">
      <Contacts />
      <MessagingArea />
    </div>
  );
}

export default App;
