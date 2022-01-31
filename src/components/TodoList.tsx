import React, { useReducer } from "react"
import TodoReducer from "../reducer"
import { Todo } from "../types/models"
import InputField from "./InputField"
import TodoItem from "./TodoItem"

type Props = {}

const TodoList: React.FC<Props> = () => {
  const [todos, dispatch] = useReducer(TodoReducer, [])
  console.log("todos", todos)
  return (
    <div className="container">
      <InputField dispatch={dispatch} />
      <div className="todos__container">
        <div className="todos">
          <h2 className="todos__header">Todos</h2>
          {todos
            .filter((item: Todo) => !item.isDone)
            .map((item: Todo) => (
              <TodoItem key={item.id} todo={item} dispatch={dispatch} />
            ))}
        </div>
        <div className="todos">
          <h2 className="todos__header">Done</h2>
          {todos
            .filter((item: Todo) => item.isDone)
            .map((item: Todo) => (
              <TodoItem key={item.id} todo={item} dispatch={dispatch} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default TodoList
