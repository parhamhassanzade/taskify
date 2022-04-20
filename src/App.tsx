import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import { Todos } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>([]); //create arry of inteface

  const handleAddTodos = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), content: todo, isDone: false }]);
      setTodo("")
    }
  };
  console.log(todos);
  

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <Input todo={todo} setTodo={setTodo} handleAddTodos={handleAddTodos} />
      <TodoList  setTodos={setTodos} todos={todos}/>
    </div>
  );
};

export default App;
