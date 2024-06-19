import { useState } from "react";
import Item from "./Item";
function PackingList({ data, onDelete, onCheckItem, onReset }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItemsBy;
  if (sortBy === "input") sortedItemsBy = data;
  if (sortBy === "description")
    sortedItemsBy = data
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItemsBy = data.slice().sort((a, b) => Number(a.packed - b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItemsBy.map((item) => (
          <Item
            onDelete={onDelete}
            item={item}
            key={item.id}
            onCheckItem={onCheckItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort By Input</option>
          <option value="description">Sort By Description</option>
          <option value="packed">Sort By Packed Status</option>
        </select>
        <button onClick={onReset}>Reset</button>
      </div>
    </div>
  );
}

export default PackingList;
