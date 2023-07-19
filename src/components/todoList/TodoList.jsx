import { useContext } from "react";
import { MainContext } from "@/state";
import styles from "./TodoList.module.scss";
import TodoItem from "../todoItem";

const TodoList = () => {
  const { state, dispatch } = useContext(MainContext);

  return (
    <section className={styles.container}>
      <h1>To do list</h1>
      <ul className={styles.TodoList}>
        {state?.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
