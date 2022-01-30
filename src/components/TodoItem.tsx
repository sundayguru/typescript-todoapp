import React from "react";
import { AiFillDelete, AiFillEdit, AiOutlineFileDone } from "react-icons/ai";

type Props = {};

const TodoItem: React.FC = (props: Props) => {
  return (
    <div className="todos__item">
      <div className="todos__item__text">
        <p>Hello World</p>
      </div>
      <div className="todos__item__actions">
        <AiFillEdit className="icon_button" />
        <AiFillDelete className="icon_button" />
        <AiOutlineFileDone className="icon_button" />
      </div>
    </div>
  );
};

export default TodoItem;
