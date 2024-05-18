import ListItem from "./ListItem";

function List({ articles, removeItem }) {
  return (
    <>
      <ul>
        {articles.map((item) => (
          <ListItem key={item.id} article={item} removeItem={removeItem} />
        ))}
      </ul>
    </>
  );
}

export default List;
