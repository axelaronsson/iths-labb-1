import { useState } from "react";
import Form from "./Form";
import List from "./List";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);

  const addEntry = (e, value) => {
    e.preventDefault();

    setArticles([
      ...articles,
      {
        id: Date.now(),
        title: value,
      },
    ]);
  };

  const removeItem = (e) => {
    setArticles(
      articles.filter((article) => article.id.toString() !== e.target.value)
    );
  };

  return (
    <>
      <h2>Shopping list</h2>
      <div>
        <Form addEntry={addEntry} />
        <List articles={articles} removeItem={removeItem} />
      </div>
    </>
  );
}

export default App;
