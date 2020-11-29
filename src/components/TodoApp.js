import React from "react";
import TodoItem from "./TodoItem";
import { todos } from "../Data/todos";

export default function TodoApp() {
  const listTodos = todos.map((todo) => {
    return <TodoItem key={todo.id} todo = {todo} />;
  });
  return <div className="todos">{listTodos}</div>;
}
