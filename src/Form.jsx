import { useState, useRef } from "react";

function Form({ addEntry }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const inputRef = useRef(null);

  const handleSubmit = (event, textInput) => {
    addEntry(event, textInput);
    inputRef.current.value = "";
  };

  return (
    <>
      <form>
        <input type="text" ref={inputRef} onChange={handleChange} />
        <br />
        <button
          onClick={(e) => {
            handleSubmit(e, inputValue);
          }}
        >
          Add item
        </button>
      </form>
    </>
  );
}

export default Form;
