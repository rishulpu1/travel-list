function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );
  }
  const totalNumItems = items.length;
  const totalPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((totalPacked / totalNumItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Yout got everything! Ready to go "
          : `
        You have ${totalNumItems} items on your list and you allready packed
        ${totalPacked}(${percentage}%)
        `}
      </em>
    </footer>
  );
}

export default Stats;
