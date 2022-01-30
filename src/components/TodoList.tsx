import React from "react";
import InputField from "./InputField";
import TodoItem from "./TodoItem";

type Props = {};

const TodoList: React.FC = (props: Props) => {
  return (
    <div className="container">
      <InputField />
      <div className="todos__container">
        <div className="todos">
          <h2 className="todos__header">Todos</h2>
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </div>
        <div className="todos">
          <h2 className="todos__header">Done</h2>
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
