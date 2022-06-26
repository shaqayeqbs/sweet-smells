import { useState, useRef } from "react";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";
import { signUpUser } from "./index";
import { useDispatch, useSelector } from "react-redux";
import classes from "./auth-form.module.css";
import { messageActions } from "../message/index";

function AuthForm() {
  const dispatch = useDispatch();
  //---------------------------------------- SELECTORS
  const userToken = useSelector((state) => state.auth.token);
  const status = useSelector((state) => state.auth.status);
  const loading = useSelector((state) => state.auth.loading);
  const serverMessage = useSelector((state) => state.auth.serverMessage);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const nameInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event) {
    event.preventDefault();

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    // optional: Add validation

    if (isLogin) {
      console.log("here");
      const result = await signIn("credentials", {
        redirect: false,
        email: email,
        password: password,
      });
      console.log(result, "res");

      if (!result.error) {
        router.replace("/");
      } else {
        console.log("errorrr");
        dispatch(messageActions.setMessage(result.error));
      }
    } else {
      const fullname = nameInputRef.current.value;
      try {
        console.log(fullname, email, password);
        const gender = male;
        const data = { email, password, fullname, gender };
        const result = await dispatch(signUpUser(data));

        dispatch(messageActions.setMessage(serverMessage));
        dispatch(messageActions.cleanMessage());
      } catch (error) {
        console.log(error);
        dispatch(messageActions.setMessage(error));
      }
    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        {!isLogin && (
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="name" id="name" required ref={nameInputRef} />
          </div>
        )}
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
