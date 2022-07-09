import ChangePassword from "./change-password";
import classes from "./user-profile.module.css";
import { useDispatch } from "react-redux";
import { messageActions } from "../message/index";
import ProfileForm from "./profile-form";

function UserProfile() {
  const dispatch = useDispatch();

  async function changePasswordHandler(passwordData) {
    const response = await fetch("/api/user/change-password", {
      method: "PATCH",
      body: JSON.stringify(passwordData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    dispatch(messageActions.setMessage(data.message));
  }

  async function changeProfileHandler(information) {
    const response = await fetch("/api/user/change-information", {
      method: "PATCH",
      body: JSON.stringify(information),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    dispatch(messageActions.setMessage(data.message));
  }

  return (
    <section className={classes.profile}>
      <div className={classes.pro}>
        <h2>Profile</h2>
        <ProfileForm onChangeProfile={changeProfileHandler} />
      </div>
      <div className={classes.border}></div>
      <div className={classes.changepass}>
        <h2>Change Password</h2>
        <ChangePassword onChangePassword={changePasswordHandler} />
      </div>
    </section>
  );
}

export default UserProfile;
