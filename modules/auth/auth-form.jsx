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
      const result = await signIn("credentials", {
        redirect: false,
        email: email,
        password: password,
      });

      if (!result.error) {
        router.replace("/");
      } else {
        dispatch(messageActions.setMessage(result.error));
      }
    } else {
      const fullname = nameInputRef.current.value;
      try {
        const gender = male;
        const data = { email, password, fullname, gender };
        const result = await dispatch(signUpUser(data));

        dispatch(messageActions.setMessage(serverMessage));
        dispatch(messageActions.cleanMessage());
      } catch (error) {
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
