import React from "react";
import "./navbar.css";
import { FaTwitter } from "react-icons/fa";
import {
  BiHomeCircle,
  BiHash,
  BiMessageSquareDetail,
  BiBookmark,
} from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiFileList2Line, RiContactsFill } from "react-icons/ri";
import { CgMoreO, CgMoreAlt } from "react-icons/cg";

const NavBar = () => {
  return (
    <div id="container-nav">
      <div id="nav-up">
        <span id="twitter-box">
          <FaTwitter id="twitter-icon" />
        </span>
        <button id="row">
          <BiHomeCircle id="home-icon" />
          <p id="nav-title">Home</p>
        </button>

        <button id="row">
          <BiHash id="home-icon" />
          <p id="nav-title">Explore</p>
        </button>

        <button id="row">
          <IoNotificationsOutline id="home-icon" />
          <p id="nav-title">Notifications</p>
        </button>

        <button id="row">
          <BiMessageSquareDetail id="home-icon" />
          <p id="nav-title">Messages</p>
        </button>

        <button id="row">
          <BiBookmark id="home-icon" />
          <p id="nav-title">Bookmarks</p>
        </button>

        <button id="row">
          <RiFileList2Line id="home-icon" />
          <p id="nav-title">Lists</p>
        </button>

        <button id="row">
          <RiContactsFill id="home-icon" />
          <p className="bold" id="nav-title">
            Profile
          </p>
        </button>

        <button id="row">
          <CgMoreO id="home-icon" />
          <p id="nav-title">More</p>
        </button>

        <button id="tweet">Tweet</button>
      </div>

      <div id="bottom-nav">
        <span id="user-box">
          <img
            id="person"
            src="https://avatars.githubusercontent.com/u/79016171?s=400&u=9376daf7bc67c804b89790ffc455fb5981c6d369&v=4"
            alt="profile"
          />
          <span>
            <p id="name">ali turkaman</p>
            <p id="id">@ATurkaman</p>
          </span>
        </span>

        <span>
          <CgMoreAlt id="more-bottom" />
        </span>
      </div>
    </div>
  );
};

export default NavBar;
