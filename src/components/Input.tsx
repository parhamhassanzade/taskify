import React, { useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodos: (e: React.FormEvent) => void;
}
const Input: React.FC<Props> = ({ todo, setTodo, handleAddTodos }) => {
  const InputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAddTodos(e);
        InputRef.current?.blur()
      }}
    >
      <input
        ref={InputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="Enter a task"
        className="input_box"
      />
      <button type="submit" className="input_submit">
        Go
      </button>
    </form>
  );
};

export default Input;
