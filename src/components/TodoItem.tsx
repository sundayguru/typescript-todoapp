import React from "react";
import { AiFillDelete, AiFillEdit, AiOutlineFileDone } from "react-icons/ai";
import { Actions } from "../reducer";
import { Todo } from "../types/models";

type Props = {
  todo: Todo;
  dispatch: React.Dispatch<Actions>;
};

const TodoItem: React.FC<Props> = ({ todo, dispatch }) => {
  return (
    <div className="todos__item">
      <div className="todos__item__text">
        <p>{todo.text}</p>
      </div>
      <div className="todos__item__actions">
        <AiFillEdit className="icon_button" />
        <AiFillDelete className="icon_button" />
        <AiOutlineFileDone
          className="icon_button"
          onClick={() => {
            dispatch({
              type: "update",
              payload: { ...todo, isDone: true },
            });
          }}
        />
      </div>
    </div>
  );
};

export default TodoItem;
