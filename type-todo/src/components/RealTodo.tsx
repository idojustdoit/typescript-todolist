import React, { useRef, useContext } from "react";

import { TodosContext } from "../store/todos-contexts";
import classes from "../styles/Form.module.css";

const RealTodo: React.FC = () => {
  const addtodolist_ref = useRef<HTMLInputElement>(null);

  const todosCtx = useContext(TodosContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enterTodo = addtodolist_ref.current!.value;

    if (enterTodo.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enterTodo);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text"> 오늘 해야할일</label>
      <input type="text" ref={addtodolist_ref} id="text" />
      <button>추가하기</button>
    </form>
  );
};

export default RealTodo;
