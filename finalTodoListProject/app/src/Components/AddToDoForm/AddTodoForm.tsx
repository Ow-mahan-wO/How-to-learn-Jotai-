import React from "react";
import Styles from "./AddTodoForm.module.css";
import { useAtom } from "jotai";
import { addTodoAtom, newTodoAtom, themeAtom } from "../../store";

const AddToDoForm: React.FC = (): React.ReactNode => {
  const [newTodo, setNewTodo] = useAtom(newTodoAtom);
  const [theme]=useAtom(themeAtom)
  const [, addtodo] = useAtom(addTodoAtom);
  function SubmitFormHandler(event: Event | undefined) {
    event?.preventDefault();
    addtodo();
  }
  return (
    <>
      <center>
        <p className={Styles.form_title}>Jotai TodoList</p>
      </center>
      <div className={theme?Styles.form_box__dark:Styles.form_box}>
        <form onSubmit={() => SubmitFormHandler(event)}>
          <input
            value={newTodo}
            className={theme?Styles.form_box__input__dark:Styles.form_box__input}
            type="text"
            onChange={(event) => setNewTodo(event!.target!.value)}
          />
          <button className={Styles.form_box__button} type="submit">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default AddToDoForm;
