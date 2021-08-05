import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { adminLogout } from "../redux/action/adminAction";
import "../SCSS/SideBar.scss";

//  ICONS IMPORTS
import HomeIcon from "@material-ui/icons/Home";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import PostAddIcon from "@material-ui/icons/PostAdd";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import GroupIcon from "@material-ui/icons/Group";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Home = ({ SetHide }) => {
  const store = useSelector((store) => store);
  const [name, setName] = useState("");
  const [CurrentButton, setCurrentButton] = useState("");

  useEffect(() => {
    CurrentButton === "" && setCurrentButton("Dashboard");
  }, [CurrentButton]);
  // console.log(Hide);

  useEffect(() => {
    if (store.admin.admin.name) {
      setName(store.admin.admin.name);
    }
  }, [store.admin.admin.name]);

  const history = useHistory();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(adminLogout());
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
            src={store.admin.admin.avatar}
            alt="Card cap"
          />
        </div>
        <h4 className="NameTitle">
          <Link to="/admin">{name.toUpperCase()}</Link>
        </h4>
        <h5>
          <Link to="/admin">{store.admin.admin.registrationNumber}</Link>
        </h5>
        <h6>Admin</h6>
        <ul className="NavMenu">
          <Link
            to="/admin"
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
            to="/admin/addFaculty"
            className={
              CurrentButton === "AddFaculty"
                ? "NavMenu__Link NavMenu__Active"
                : "NavMenu__Link"
            }
            onClick={() => {
              setCurrentButton("AddFaculty");
              SetHide();
            }}
          >
            <li className="active NavMenu__Link__Li">
              <PersonAddIcon />
              <p>Add Faculty</p>
            </li>
          </Link>
          <Link
            to="/admin/addStudent"
            className={
              CurrentButton === "AddStudent"
                ? "NavMenu__Link NavMenu__Active"
                : "NavMenu__Link"
            }
            onClick={() => {
              setCurrentButton("AddStudent");
              SetHide();
            }}
          >
            <li className="active NavMenu__Link__Li">
              <GroupAddIcon />
              <p>Add Students</p>
            </li>
          </Link>
          <Link
            to="/admin/addAdmin"
            className={
              CurrentButton === "AddAdmin"
                ? "NavMenu__Link NavMenu__Active"
                : "NavMenu__Link"
            }
            onClick={() => {
              setCurrentButton("AddAdmin");
              SetHide();
            }}
          >
            <li className="active NavMenu__Link__Li">
              <SupervisorAccountIcon />
              <p>Add New Admin</p>
            </li>
          </Link>
          <Link
            to="/admin/addSubject"
            className={
              CurrentButton === "AddSubject"
                ? "NavMenu__Link NavMenu__Active"
                : "NavMenu__Link"
            }
            onClick={() => {
              setCurrentButton("AddSubject");
              SetHide();
            }}
          >
            <li className="active NavMenu__Link__Li">
              <PostAddIcon />
              <p>Add Subject</p>
            </li>
          </Link>
          <Link
            to="/admin/allFaculties"
            className={
              CurrentButton === "ViewFaculty"
                ? "NavMenu__Link NavMenu__Active"
                : "NavMenu__Link"
            }
            onClick={() => {
              setCurrentButton("ViewFaculty");
              SetHide();
            }}
          >
            <li className="active NavMenu__Link__Li">
              <PermContactCalendarIcon />
              <p>View Faculties</p>
            </li>
          </Link>
          <Link
            to="/admin/allStudents"
            className={
              CurrentButton === "ViewStudent"
                ? "NavMenu__Link NavMenu__Active"
                : "NavMenu__Link"
            }
            onClick={() => {
              setCurrentButton("ViewStudent");
              SetHide();
            }}
          >
            <li className="active NavMenu__Link__Li">
              <GroupIcon />
              <p>View Students</p>
            </li>
          </Link>
          <Link
            to="/admin/allSubject"
            className={
              CurrentButton === "ViewSubject"
                ? "NavMenu__Link NavMenu__Active"
                : "NavMenu__Link"
            }
            onClick={() => {
              setCurrentButton("ViewSubject");
              SetHide();
            }}
          >
            <li className="active NavMenu__Link__Li">
              <ListAltIcon />
              <p>View Subjects</p>
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
