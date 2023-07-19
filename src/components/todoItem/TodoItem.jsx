import { useContext, useState } from "react";
import { MainContext } from "@/state";
import styles from "./TodoItem.module.scss";

const TodoItem = ({ todo }) => {
  const { state, dispatch } = useContext(MainContext);
  const [isVisible, setIsVisible] = useState(true);

  const onHandleClick = () => {
    dispatch({ type: "SET_COMPLETED", payload: todo.id });
  };

  const onHandleClickDelete = () => {
    dispatch({ type: "DELETE_TODO", payload: todo.id });
  };

  return (
    <>
      <li
        className={`${styles.todo} ${todo.completed && styles.completed}`}
        onClick={onHandleClick}
      >
        {todo?.content}
        {isVisible && (
          <span className={styles.deleteBtn} onClick={onHandleClickDelete}>
            X
          </span>
        )}
      </li>
    </>
  );
};

export default TodoItem;
