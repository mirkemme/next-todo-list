import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/plugins/firebase";
import { useContext } from "react";
import { MainContext } from "@/state";
import styles from "./Login.module.scss";

const Login = () => {
  const { state, dispatch } = useContext(MainContext);

  const onHandleGoogleAuth = async () => {
    const res = await signInWithPopup(auth, provider);
    dispatch({ type: "SET_USERNAME", payload: res.user.displayName });
    console.log(res);
  };
  return (
    <section className={styles.wrapper}>
      <h1>Google Login</h1>
      <input
        type="button"
        value="Entra con Google"
        className={styles.loginBtn}
        onClick={onHandleGoogleAuth}
      />
    </section>
  );
};

export default Login;
