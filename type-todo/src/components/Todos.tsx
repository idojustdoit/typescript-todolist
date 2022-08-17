import React, { useContext } from "react";
import Toplan from "./Toplan";
import classes from "../styles/list.module.css";
import { TodosContext } from "../store/todos-contexts";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <Toplan
          key={item.id}
          text={item.text}
          removeTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
