import { useContext } from "react";
import { MainContext } from "@/state";
import styles from "./TodoList.module.scss";
import TodoItem from "../todoItem";

const TodoList = () => {
  const { state, dispatch } = useContext(MainContext);

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        {state.username ? (
          <>
            To do list di <span className={styles.username}>{state.username}</span>
          </>
        ) : (
          <>Effettua il login</>
        )}
      </h1>
      <ul className={styles.TodoList}>
        {state?.todos?.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
