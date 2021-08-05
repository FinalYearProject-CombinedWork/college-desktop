import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

import FacultyHomeHelper from "../Components/FacultyHomeHelper";

const FacultyInterface = () => {
  const history = useHistory();
  const store = useSelector((store) => store);
  const [ShowNav, setShowNav] = useState(false);
  const SetHide = () => {
    setShowNav(!ShowNav);
  };
  return (
    <>
      {store.faculty.isAuthenticated ? (
        <div className="MainContainer">
          <div
            className={ShowNav ? "HelperContainer ShowNav" : "HelperContainer"}
          >
            <FacultyHomeHelper SetHide={SetHide} />
          </div>
          <nav className="TopNav">
            <Link className="LogoLink" to="/admin">
              <img src="/Assets/Logo2.png" alt="MainLogo" /> Vidyashalla
            </Link>
            <div onClick={() => setShowNav(!ShowNav)}>
              <MenuIcon />
            </div>
          </nav>
          <div className="container mt-5">
            <h3 className="Title">Home</h3>
            <div className="row mt-1">
              <div className="col-md-10 ">
                <div className="row FacultyHome ">
                  <div className="col-4">
                    <div
                      className="card Imagecard"
                      style={{ width: "17rem", alignItems: "flex-start" }}
                    >
                      <img
                        className="card-img-top"
                        src={store.faculty.faculty.faculty.avatar}
                        alt="Card cap"
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          {store.faculty.faculty.faculty.name}
                        </h5>
                        <h5 className="card-title">
                          {store.faculty.faculty.faculty.registrationNumber}
                        </h5>
                        <Link to="/faculty/updateProfile">UPDATE PROFILE</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <table className="table border">
                      <tbody>
                        <tr>
                          <td>Name</td>
                          <td>{store.faculty.faculty.faculty.name}</td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td>{store.faculty.faculty.faculty.email}</td>
                        </tr>
                        <tr>
                          <td>Registration Number</td>
                          <td>
                            {store.faculty.faculty.faculty.registrationNumber}
                          </td>
                        </tr>
                        <tr>
                          <td>Date Of Birth</td>
                          <td>{store.faculty.faculty.faculty.dob}</td>
                        </tr>
                        <tr>
                          <td>Designation</td>
                          <td>{store.faculty.faculty.faculty.designation}</td>
                        </tr>
                        <tr>
                          <td>Joining Year</td>
                          <td>{store.faculty.faculty.faculty.joiningYear}</td>
                        </tr>
                        <tr>
                          <td>Department</td>
                          <td>{store.faculty.faculty.faculty.department}</td>
                        </tr>
                        <tr>
                          <td>Gender</td>
                          <td>
                            {store.faculty.faculty.faculty.gender
                              ? store.faculty.faculty.faculty.gender
                              : "NA"}
                          </td>
                        </tr>
                        <tr>
                          <td>Contact Number</td>
                          <td>
                            {store.faculty.faculty.faculty.facultyMobileNumber
                              ? store.faculty.faculty.faculty
                                  .facultyMobileNumber
                              : "NA"}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        history.push("/")
      )}
    </>
  );
};

export default FacultyInterface;
