import { useState } from "react";
import Form from "./Form";
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
  return (
    <>
      <h2>Shopping list</h2>
      <div>
        <Form addEntry={addEntry} />
      </div>
    </>
  );
}

export default App;
