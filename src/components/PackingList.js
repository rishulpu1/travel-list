import Item from "./Item";
function PackingList({ data, onDelete }) {
  return (
    <div className="list">
      <ul>
        {data.map((item) => (
          <Item onDelete={onDelete} item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
