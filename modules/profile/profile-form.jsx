import { useRef } from "react";
import classes from "./profile-form.module.css";
import { useSession } from "next-auth/client";
import { messageActions } from "../message/index";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

function ProfileForm(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [session] = useSession();
  const username = session?.session?.user?.name;
  const email = session?.session?.user.email;
  const gender = session?.session?.user.gender;

  const femalechecked = gender === "female" ? true : false;

  ///
  const nameRef = useRef();
  const emailRef = useRef();
  const femaleRef = useRef();
  const maleRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredname = nameRef.current.value;
    const enteredemail = emailRef.current.value;
    const enteredgender = femaleRef.current.checked ? "female" : "male";

    if (
      enteredname === username &&
      enteredemail === email &&
      enteredgender === gender
    ) {
      dispatch(messageActions.setMessage("There is No new update!"));
      return;
    }

    props.onChangeProfile({
      name: enteredname,
      email: enteredemail,
      gender: enteredgender,
    });
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" defaultValue={username} ref={nameRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" defaultValue={email} ref={emailRef} />
      </div>
      <div className={classes.controlradio}>
        <label>Gender</label>
        <input
          type="radio"
          id="female"
          defaultValue="female"
          defaultChecked={femalechecked}
          name="gender"
          ref={femaleRef}
        />
        <label htmlFor="female">female</label>
        <input
          type="radio"
          id="male"
          defaultValue="male"
          defaultChecked={!femalechecked}
          name="gender"
          ref={maleRef}
        />
        <label htmlFor="male">male</label>
      </div>
      <div className={classes.action}>
        <button>Change Information</button>
      </div>
    </form>
  );
}

export default ProfileForm;
