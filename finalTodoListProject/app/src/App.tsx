import { useAtom } from "jotai";
import "./App.css";
import AddToDoForm from "./Components/AddToDoForm/AddTodoForm";
import TodoItem from "./Components/TodoItem/TodoItem";
import {todosAtom } from "./store";

function App() {
  const [todos] = useAtom(todosAtom);
  
  return (
    <>
      <div
        className="Container"
      >
        <div className="box">
          <button
            className="themeToggleButton"
            >
            
          </button>
          <AddToDoForm />
        </div>
        <div>
          {todos?.map((todo, i) => (
            <div key={i}>
              <TodoItem todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
