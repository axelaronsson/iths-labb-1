import { useState, useEffect } from "react";
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
    if (articles.length === 1) {
      localStorage.setItem("articleData", JSON.stringify([]));
    }
    setArticles(
      articles.filter((article) => article.id.toString() !== e.target.value)
    );
  };

  useEffect(() => {
    let data = localStorage.getItem("articleData");

    if (data && !articles.length) {
      let articlesArr = JSON.parse(data);
      setArticles(articlesArr);
    }
  }, []);

  useEffect(() => {
    if (articles.length > 0) {
      localStorage.setItem("articleData", JSON.stringify(articles));
    }
  }, [articles]);

  return (
    <>
      <h2>Shopping list</h2>
      <div style={{ height: "100vh" }}>
        <Form addEntry={addEntry} />
        <List articles={articles} removeItem={removeItem} />
      </div>
    </>
  );
}

export default App;
