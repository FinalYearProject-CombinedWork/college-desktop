import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { facultyLogout } from "../redux/action/facultyAction";

import "../SCSS/SideBar.scss";

//  ICONS IMPORTS
import HomeIcon from "@material-ui/icons/Home";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import PostAddIcon from "@material-ui/icons/PostAdd";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Home = ({ SetHide }) => {
  const store = useSelector((store) => store);
  const history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [CurrentButton, setCurrentButton] = useState("");
  useEffect(() => {
    if (store.faculty.faculty.faculty.name) {
      setName(store.faculty.faculty.faculty.name);
    }
  }, [store.faculty.faculty.faculty.name]);
  const logoutHandler = () => {
    dispatch(facultyLogout());
    history.push("/");
  };
  return (
    <div className="SideBar">
      <nav className="NavBar">
        <div className="MianLogo">
          <Link className="LogoLink" to="/admin">
            <img src="/Assets/Logo2.png" alt="MainLogo" />
            VidyaShala
          </Link>
        </div>
        <div className="ProfilePic">
          <img
            className="card-img-top"
            src={store.faculty.faculty.faculty.avatar}
            alt="Card cap"
          />
        </div>
        <h4 className="NameTitle">
          <Link to="/home">{name.toUpperCase()}</Link>
        </h4>
        <h5>
          <Link to="/home">
            {store.faculty.faculty.faculty.registrationNumber}
          </Link>
        </h5>
        <h6>Admin</h6>
        <ul className="NavMenu">
          <Link
            to="/home"
            className={
              CurrentButton === "Dashboard"
                ? "NavMenu__Link NavMenu__Active"
                : "NavMenu__Link"
            }
            onClick={() => {
              setCurrentButton("Dashboard");
              SetHide();
            }}
          >
            <li className=" NavMenu__Link__Li">
              <HomeIcon />
              <p>Dashboard</p>
            </li>
          </Link>
          <Link
            to="/faculty/updateProfile"
            className={
              CurrentButton === "UpdateProfile"
                ? "NavMenu__Link NavMenu__Active"
                : "NavMenu__Link"
            }
            onClick={() => {
              setCurrentButton("UpdateProfile");
              SetHide();
            }}
          >
            <li className="active NavMenu__Link__Li">
              <PersonAddIcon />
              <p>Update Profile</p>
            </li>
          </Link>
          <Link
            to="/attendenceFaculty"
            className={
              CurrentButton === "MarkAttendence"
                ? "NavMenu__Link NavMenu__Active"
                : "NavMenu__Link"
            }
            onClick={() => {
              setCurrentButton("MarkAttendence");
              SetHide();
            }}
          >
            <li className="active NavMenu__Link__Li">
              <GroupAddIcon />
              <p>Mark Attendence</p>
            </li>
          </Link>
          <Link
            to="/faculty/uploadMarks"
            className={
              CurrentButton === "UploadMarks"
                ? "NavMenu__Link NavMenu__Active"
                : "NavMenu__Link"
            }
            onClick={() => {
              setCurrentButton("UploadMarks");
              SetHide();
            }}
          >
            <li className="active NavMenu__Link__Li">
              <SupervisorAccountIcon />
              <p>Upload Marks</p>
            </li>
          </Link>
          <Link
            to="/faculty/updatePassword"
            className={
              CurrentButton === "UpdatePassword"
                ? "NavMenu__Link NavMenu__Active"
                : "NavMenu__Link"
            }
            onClick={() => {
              setCurrentButton("UpdatePassword");
              SetHide();
            }}
          >
            <li className="active NavMenu__Link__Li">
              <PostAddIcon />
              <p>Update PassWord</p>
            </li>
          </Link>
        </ul>
      </nav>
      <Link onClick={() => logoutHandler()} className="LogoutButton">
        <ExitToAppIcon />
        <p>LOGOUT</p>
      </Link>
    </div>
  );
};

export default Home;
