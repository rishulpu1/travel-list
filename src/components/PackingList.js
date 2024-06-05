import Item from "./Item";
function PackingList({ data }) {
  return (
    <div className="list">
      <ul>
        {data.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
