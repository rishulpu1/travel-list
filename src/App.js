import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import Form from "./components/Form";
const initialItems = [
  { id: 1, description: "Passports", qty: 2, packed: false },
  { id: 2, description: "Socks", qty: 12, packed: true },
  { id: 3, description: "Charger", qty: 2, packed: false },
];
function App() {
  return (
    <div className="App">
      <Logo />
      <Form />
      <PackingList data={initialItems} />
      <Stats />
    </div>
  );
}

export default App;
