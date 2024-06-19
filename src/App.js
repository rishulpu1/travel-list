import { useState } from "react";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import Form from "./components/Form";
// const initialItems = [
//   { id: 1, description: "Passports", qty: 2, packed: false },
//   { id: 2, description: "Socks", qty: 12, packed: true },
//   { id: 3, description: "Charger", qty: 2, packed: false },
// ];
function App() {
  const [items, setItems] = useState([]);
  function addItemsHandler(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handlePackedItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleReset() {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="App">
      <Logo />
      <Form onAddItem={addItemsHandler} />
      <PackingList
        data={items}
        onDelete={handleDeleteItem}
        onCheckItem={handlePackedItem}
        onReset={handleReset}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
