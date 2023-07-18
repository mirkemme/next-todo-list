import { useContext } from "react";
import { MainContext } from "@/state";
import styles from "./TodoList.module.scss";

const TodoList = () => {
  const state = useContext(MainContext);
  return (
    <section className={styles.container}>
      <ul className={styles.TodoList}>
        {state.map((item) => (
          <li key={item.id} className={styles.todo}>
            {item.todo}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
