import React from "react";
import ReactDOM from "react-dom";
import "./closeFriend.css";

export default function CloseFriend({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER || "";
  const profilePic = user.profilePicture || "";
  return (
    <li className="sidebarFriend">
      <img
        className="sidebarFriendImg"
        src={PF + "/images/" + profilePic}
        alt=""
      />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}
