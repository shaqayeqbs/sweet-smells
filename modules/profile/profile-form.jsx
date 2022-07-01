import { useRef } from "react";
import classes from "./profile-form.module.css";
import { useSession } from "next-auth/client";

function ProfileForm(props) {
  const [session] = useSession();
  const username = session?.user?.name;
  const email = session?.user.email;
  const gender = session?.user.image;

  ///
  const nameRef = useRef();
  const emailRef = useRef();
  const genderRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredname = nameRef.current.value;
    const enteredemail = emailRef.current.value;
    const enteredgender = genderRef.current.value;

    // Add validation

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
        <input type="text" id="name" value={username} ref={nameRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} ref={emailRef} />
      </div>
      <div className={classes.controlradio}>
        <label>Gender</label>
        <input
          type="radio"
          id="female"
          name="female"
          value={gender}
          ref={genderRef}
        />
        <label htmlFor="female">female</label>
        <input
          type="radio"
          id="male"
          value={gender}
          name="male"
          ref={genderRef}
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
