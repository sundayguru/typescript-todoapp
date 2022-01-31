import { Todo } from "./types/models";

export type Actions =
  | { type: "add"; payload: Todo }
  | { type: "remove"; id: number }
  | { type: "update"; payload: Todo };

export default function TodoReducer(state: Todo[], action: Actions) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      return state.filter((item: Todo) => item.id === action.id);
    case "update":
      const todos: Todo[] = [
        ...state.filter((item: Todo) => item.id !== action.payload.id),
      ];
      todos.push(action.payload);
      return todos;
    default:
      return state;
  }
}
