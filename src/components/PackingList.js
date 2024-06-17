import Item from "./Item";
function PackingList({ data, onDelete, onCheckItem }) {
  return (
    <div className="list">
      <ul>
        {data.map((item) => (
          <Item
            onDelete={onDelete}
            item={item}
            key={item.id}
            onCheckItem={onCheckItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
