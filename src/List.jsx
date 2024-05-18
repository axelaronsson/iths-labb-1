import ListItem from "./ListItem";

function List({ articles, removeItem }) {
  return (
    <>
      <ul style={{ paddingLeft: "0px" }}>
        {articles.map((item) => (
          <ListItem key={item.id} article={item} removeItem={removeItem} />
        ))}
      </ul>
    </>
  );
}

export default List;
