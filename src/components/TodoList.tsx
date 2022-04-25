import React from "react";
import { Todos } from "../model";
import SingleTodo from "./SingleTodo";
type Props = {
  todos: Todos[];
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
};
const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div style={{width:"70%"}}>
      {todos?.map((todo) => (
        <SingleTodo
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
