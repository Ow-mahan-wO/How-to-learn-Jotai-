import Styles from "./TodoItem.module.css";
import TodoItemControls from "./TodoItemControls";

const TodoItem: React.FC<any> = ({ todo }): React.ReactNode => {
  
  return (
    <>
      <div className={todo.completed?Styles.TodoCart__Completed:Styles.TodoCard}>
        <div>{todo.text}</div>
        <TodoItemControls data={todo} />
      </div>
    </>
  );
};

export default TodoItem;
