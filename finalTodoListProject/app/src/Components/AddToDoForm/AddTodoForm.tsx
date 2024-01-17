import React from "react";
import Styles from "./AddTodoForm.module.css";
const AddToDoForm: React.FC = (): React.ReactNode => {
  return (
    <>
      <center>
        <p className={Styles.form_title}>Jotai TodoList</p>
      </center>
      <div className={Styles.form_box}>
        <form>
          <input className={Styles.form_box__input} type="text" />
          <button className={Styles.form_box__button} type="submit">Add</button>
        </form>
      </div>
    </>
  );
};

export default AddToDoForm;
