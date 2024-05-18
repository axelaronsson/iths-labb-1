function ListItem({ article, removeItem }) {
  const buttonStyle = {
    padding: "2px 8px",
    backgroundColor: "red",
    float: "right",
  };

  const listStyle = {
    listStyle: "none",
    minWidth: "200px",
    textAlign: "left",
    margin: "20px",
    borderBottom: "1px solid",
    paddingBottom: "5px",
  };

  return (
    <>
      <li style={listStyle}>
        {article.title}
        <button
          style={buttonStyle}
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
