import React from "react";
import ReactDOM from "react-dom";
import "./share.css";
// import {AddPhotoAlternate, VideoFile, PermMedia, Cancel} from "@mui/icons-material";
import { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.js";
import { useRef } from "react";
import axios from "axios";

export default function Share() {
  const [shake, setShake] = useState(false);
  const animate = () => {
    // Button begins to shake
    setShake(true);

    // Buttons stops to shake after 1 second
    setTimeout(() => setShake(false), 1000);
  };

  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER || "";
  const desc = useRef();
  const [file, setFile] = useState(null);
  const [tags, setTags] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
      tag: tags.join(", "),
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("filename", fileName);
      data.append("file", file);
      newPost.img = fileName;
      try {
        await axios.post("/spur-backend/upload", data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      await axios.post("/spur-backend/posts", newPost);
      window.location.reload();
    } catch (err) {}
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "/images/person/noAvatar.png"
            }
            alt=""
          />
          <input
            placeholder={"What's on your mind " + user.username + "?"}
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            {/* <Cancel className="shareCancelImg" onClick={()=> setFile(null)} /> */}
          </div>
        )}
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <div className="shareOption" aria-required>
              <Multiselect
                isObject={false}
                onRemove={(value) => {
                  setTags(value);
                }}
                onSelect={(value) => {
                  setTags(value);
                }}
                hidePlaceholder={true}
                placeholder="Choose a tag"
                options={[
                  "No Poverty 💰",
                  "Zero Hunger 🍖",
                  "Good Health and Well-being 🏃",
                  "Quality Education 👩‍🏫",
                  "Gender Equality 🏳‍🌈",
                  "Clean Water and Sanitation 💧",
                  "Affordable and Clean Energy ♻",
                  "Decent work and Economic growth 👨‍🍳",
                  "Industry, Innovation and Infrastructure 🛰",
                  "Reduced Inequalities 🚻",
                  "Sustainable cities and Communities 🌃",
                  "Responsible Consumption and Production 🏢",
                  "Climate Action 🗺",
                  "Life Bellow Water 🌊",
                  "Life on Land 🏞",
                  "Peace, Justice and Strong Institutions ☮",
                  "Partnerships for the Goals 🤝",
                ]}
              />
            </div>
            <div htmlFor="file" className="shareOption">
              {/* <PermMedia htmlColor="gold"className="shareIcon" /> */}
              <span className="shareOptionText">Photo</span>
              <input
                type="file"
                name="file"
                id="file"
                accept=".png, .jpeg, .jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
          </div>
          <button
            onClick={animate}
            className={shake ? `shake` : "shareButton"}
            type="submit"
          >
            Share
          </button>
        </form>
      </div>
    </div>
  );
}
