import React from "react";

type Props = {};

const InputField: React.FC = () => {
  return (
    <div className="input_container">
      <form>
        <input type="text" className="input" />
        <button className="input_button">Save</button>
      </form>
    </div>
  );
};

export default InputField;
