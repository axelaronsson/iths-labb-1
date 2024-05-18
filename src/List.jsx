import ListItem from "./ListItem";

function List({ articles }) {
  return (
    <>
      <ul>
        {articles.map(item => <ListItem key={item.id} article={item} />)}
      </ul>
    </>
  );
}

export default List;
