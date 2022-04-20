import React from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}
const Input = ({ todo, setTodo }: Props) => {
  return (
    <form className="input">
      <input type="text" placeholder="Enter a task" className="input_box" />
      <button type="submit" className="input_submit">
        Go
      </button>
    </form>
  );
};

export default Input;
