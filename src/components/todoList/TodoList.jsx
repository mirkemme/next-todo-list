import { useContext } from "react";
import { MainContext } from "@/state";
import styles from "./TodoList.module.scss";

const TodoList = () => {
  const { state, dispatch } = useContext(MainContext);
  const onHandleClick = (id) => {
    dispatch({ type: "SET_COMPLETED", payload: id });
  };

  return (
    <section className={styles.container}>
      <ul className={styles.TodoList}>
        {state?.map((item) => (
          <li
            key={item?.id}
            className={`${styles.todo} ${item.completed && styles.completed}`}
            onClick={() => onHandleClick(item.id)}
          >
            {item?.todo}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
