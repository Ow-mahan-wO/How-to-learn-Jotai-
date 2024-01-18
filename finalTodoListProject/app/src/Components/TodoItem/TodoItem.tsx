import { useAtom } from "jotai";
import Styles from "./TodoItem.module.css";
import TodoItemControls from "./TodoItemControls";
import { themeAtom } from "../../store";

const TodoItem: React.FC<any> = ({ todo }): React.ReactNode => {
  const [theme] = useAtom(themeAtom)
  return (
    <>
      <div className={todo.completed?Styles.TodoCart__Completed:theme?Styles.TodoCard__dark:Styles.TodoCard}>
        <div>{todo.text}</div>
        <TodoItemControls data={todo} />
      </div>
    </>
  );
};

export default TodoItem;
