import Styles from './TodoItem.module.css'
import TodoItemControls from './TodoItemControls';

const TodoItem:React.FC = (): React.ReactNode => {
  return <>
  <div className={Styles.TodoCard}>
  <div>
    Go to Park
  </div>
    <TodoItemControls/>
  </div>
  </>;
};

export default TodoItem;
