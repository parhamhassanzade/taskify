import React from "react";
import { Todos } from "../model";
import { AiOutlineEdit, AiFillDelete, AiOutlineCheck } from "react-icons/ai";
import "./styles.css";
type props = {
  todo: Todos;
  todos: Todos[];
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
};
const SingleTodo: React.FC<props> = ({ todo, todos, setTodos }) => {
  const handleDone = (id: number) => {
    console.log("hi");
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <form className="singleTodo">
      {todo.isDone ? (
        (console.log("hi"), (<s className="singleTodo-Text">{todo.content}</s>))
      ) : (
        <span className="singleTodo-Text">{todo.content}</span>
      )}
      <div className="icon-box">
        <span>
          <AiOutlineEdit />
        </span>
        <span onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span onClick={() => handleDone(todo.id)}>
          <AiOutlineCheck />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
