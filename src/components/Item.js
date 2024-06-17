function Item({ item, onDelete, onCheckItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        checked={item.packed}
        onChange={() => onCheckItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.qty} {item.description}
      </span>
      <button
        onClick={() => onDelete(item.id)}
        style={{ color: "red", fontSize: "20px" }}
      >
        X
      </button>
    </li>
  );
}

export default Item;
