import React, { useRef, useState } from "react";
import { Actions } from "../reducer";

type Props = {
  dispatch: React.Dispatch<Actions>;
};

const InputField: React.FC<Props> = (props) => {
  const [text, setText] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void = (e) => {
    e.preventDefault();
    if (!text) return;

    props.dispatch({
      type: "add",
      payload: { id: Date.now(), text, isDone: false },
    });
    setText("");
    inputRef.current?.focus();
  };

  const handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (
    e
  ) => {
    setText(e.target.value);
  };

  return (
    <div className="input_container">
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          className="input"
          value={text}
          onChange={handleInputChange}
        />
        <button className="input_button">Save</button>
      </form>
    </div>
  );
};

export default InputField;
