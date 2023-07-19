import Head from "next/head";
import { useReducer } from "react";
import { mainReducer } from "@/state/reducers";
import { MainContext } from "@/state";
import styles from "@/styles/Home.module.scss";
import TodoList from "../components/todoList/TodoList";
import { todos } from "../mock/todos";
import Header from "@/components/header";

export default function Home() {
  const [state, dispatch] = useReducer(mainReducer, todos);

  return (
    <>
      <Head>
        <title>Next - Todo list</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContext.Provider value={{ state, dispatch }}>
        <main className={`${styles.Home}`}>
          <Header />
          <TodoList />
        </main>
      </MainContext.Provider>
    </>
  );
}
