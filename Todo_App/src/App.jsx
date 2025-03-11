import { useState } from "react";
import "./App.css";
import AppName from "./TodoComponents/AppName";
import DisplayItems from "./TodoComponents/DisplayItems";
import UserInputs from "./TodoComponents/UserInputs";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const getUserInputs = (inpuName, dueDate) => {
    let newTodoItems = [{ name: inpuName, date: dueDate }, ...todoItems];
    setTodoItems(newTodoItems);
  };

  const handleDisplayItems = (deleteItemName) => {
    let newTodoItems = todoItems.filter((item) => item.name !== deleteItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <div className="w-6/12 p-8 border-4 rounded-xl border-solid border-white hero-sec">
      <AppName />
      <UserInputs getUserInputs={getUserInputs}></UserInputs>
      <DisplayItems
        handleDisplayItems={handleDisplayItems}
        todoItems={todoItems}
      ></DisplayItems>
    </div>
  );
}

export default App;
