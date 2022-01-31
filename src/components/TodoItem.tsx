import React, { useState } from "react"
import { AiFillDelete, AiFillEdit, AiOutlineFileDone } from "react-icons/ai"
import { MdCancel } from "react-icons/md"
import { Actions } from "../reducer"
import { Todo } from "../types/models"

type Props = {
  todo: Todo
  dispatch: React.Dispatch<Actions>
}

const TodoItem: React.FC<Props> = ({ todo, dispatch }) => {
  const [isEdit, setIsEdit] = useState(false)
  const [text, setText] = useState(todo.text)

  return (
    <form
      className="todos__item"
      onSubmit={(e) => {
        e.preventDefault()
        dispatch({ type: "update", payload: { ...todo, text } })
        setIsEdit(false)
      }}
    >
      <div className="todos__item__text">
        {isEdit ? (
          <input
            className="inline_input"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        ) : (
          <p>{todo.text}</p>
        )}
      </div>
      <div className="todos__item__actions">
        {!todo.isDone && (
          <>
            {isEdit ? (
              <MdCancel
                className="icon_button"
                onClick={() => {
                  setIsEdit(!isEdit)
                  setText(todo.text)
                }}
              />
            ) : (
              <AiFillEdit
                className="icon_button"
                onClick={() => setIsEdit(!isEdit)}
              />
            )}
          </>
        )}
        {!todo.isDone && (
          <AiOutlineFileDone
            className="icon_button"
            onClick={() => {
              dispatch({
                type: "update",
                payload: { ...todo, isDone: true },
              })
            }}
          />
        )}
        <AiFillDelete
          className="icon_button"
          onClick={() => {
            dispatch({
              type: "remove",
              id: todo.id,
            })
          }}
        />
      </div>
    </form>
  )
}

export default TodoItem
