function ListItem({ article, removeItem }) {
  return (
    <>
      <li>
        {article.title}
        <button
          value={article.id}
          onClick={(e) => {
            removeItem(e);
          }}
        >
          Delete
        </button>
      </li>
    </>
  );
}

export default ListItem;
