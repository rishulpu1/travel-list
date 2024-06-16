function Item({ item, onDelete }) {
  return (
    <li>
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
