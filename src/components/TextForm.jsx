import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleClearText = () => {
    setText("");
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  return (
    <>
      <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control my-3"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#022866" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleUpClick}
        >
          Convert To Uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-3 my-1"
          onClick={handleLowClick}
        >
          Convert To Lowercase
        </button>

        <button
          type="button"
          className="btn btn-primary"
          onClick={handleClearText}
        >
          Clear Text
        </button>

        <button
          type="button"
          className="btn btn-primary mx-3 my-1"
          onClick={handleCopy}
        >
          Copy to Clipboard
        </button>

        <button
          type="button"
          className="btn btn-primary"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>

        <h3 className="my-3">Your Text Summary</h3>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words and {text.length} Characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes Read
        </p>
        <h3>Preview</h3>
        <p>
          {text}
        </p>
      </div>
    </>
  );
}
