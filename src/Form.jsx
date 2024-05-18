import { useState } from "react";

function Form() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <p>input: {inputValue}</p>
      <form>
        <input type="text" onChange={handleChange} />
        <br />
        <button>Add item</button>
      </form>
    </>
  );
}

export default Form;
