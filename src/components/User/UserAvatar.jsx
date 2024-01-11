import React from "react";
import classes from "./UserAvatar.module.css";
import userAvatar from "../../assets/images/image-avatar.png";

function UserAvatar() {
  return <div className={classes.avatar}>
    <img src={userAvatar} alt="user-avatar" />
  </div>;
}

export default UserAvatar;
