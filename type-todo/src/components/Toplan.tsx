import React from "react";
import classes from "../styles/item.module.css";

const Toplan: React.FC<{
  text: string;
  removeTodo: (event: React.MouseEvent) => void;
}> = (props) => {
  return (
    <ul>
      <li className={classes.item} onClick={props.removeTodo}>
        {" "}
        {props.text}{" "}
      </li>
    </ul>
  );
};

export default Toplan;
