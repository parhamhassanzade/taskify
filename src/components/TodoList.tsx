import React from "react";
import { Todos } from "../model";
import SingleTodo from './SingleTodo';
type Props = {
  todos: Todos[];
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
};
const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div>
      {todos?.map((todo) => (
        <li>{todo.content}</li>
        // <SingleTodo/>
      ))}
    </div>
  );
};

export default TodoList;
