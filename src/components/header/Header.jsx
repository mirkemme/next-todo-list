import { useState, useContext } from "react";
import { MainContext } from "@/state";
import styles from "./Header.module.scss";

const Header = () => {
  const [input, setInput] = useState("");
  const { state, dispatch } = useContext(MainContext);

  const onAddNewTodo = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_NEW_TODO",
      payload: {
        id: Math.floor(Math.random() * 1000000),
        content: input,
        completed: false,
      },
    });
    setInput("");
  };

  const onHandleChange = (event) => setInput(event.target.value);

  const onHandleClickLogin = () => {
    state.username
      ? dispatch({ type: "SET_USERNAME", payload: "" })
      : dispatch({ type: "SET_USERNAME", payload: "toto_termini" });
  };

  return (
    <header className={styles.Header}>
      <form action="#" className={styles.inputForm} onSubmit={onAddNewTodo}>
        <input
          type="text"
          value={input}
          name="content"
          className={styles.inputContent}
          placeholder="Add new to do"
          onChange={onHandleChange}
          disabled={!state.username}
          required
        />
        <input type="submit" value="add" className={styles.addBtn} />
        <input
          type="button"
          value={state.username ? "logout" : "login"}
          className={styles.loginBtn}
          onClick={onHandleClickLogin}
        />
      </form>
    </header>
  );
};

export default Header;
