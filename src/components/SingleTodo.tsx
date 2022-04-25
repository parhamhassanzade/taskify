import React from "react";
import { Todos } from "../model";
import { AiOutlineEdit, AiFillDelete, AiOutlineCheck } from "react-icons/ai";
import "./styles.css"
type props = {
  todo: Todos;
  todos: Todos[];
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
};
const SingleTodo: React.FC<props> = ({ todo, todos, setTodos }) => {
  return (
    <form className="singleTodo">
      <span className="singleTodo-Text">{todo.content}</span>
      <div className="icon-box">
        <span>
          <AiOutlineEdit />
        </span>
        <span>
          <AiFillDelete />
        </span>
        <span>
          <AiOutlineCheck />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
