import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import classnames from "classnames";
import FacultyHomeHelper from "../Components/FacultyHomeHelper";
import { facultyUpdatePassword } from "../redux/action/facultyAction";
import MenuIcon from "@material-ui/icons/Menu";

const FacultyUpdatePassword = () => {
  const store = useSelector((store) => store);
  const history = useHistory();
  const dispatch = useDispatch();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});
  const [ShowNav, setShowNav] = useState(false);
  const SetHide = () => {
    setShowNav(!ShowNav);
  };

  useEffect(() => {
    if (store.error) {
      setError(store.error);
    }
  }, [store.error]);
  const formHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    dispatch(
      facultyUpdatePassword({
        registrationNumber: store.faculty.faculty.faculty.registrationNumber,
        oldPassword,
        newPassword,
        confirmNewPassword,
      })
    );
  };
  useEffect(() => {}, [store.faculty]);
  return (
    <div>
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
            <h3 className="Title mb-4">Change Password</h3>
            <div className="row mt-2 ml-5">
              <div className="col-md-6">
                <form noValidate onSubmit={formHandler}>
                  <div className="form-group">
                    <label htmlFor="emailId">Old Password</label>
                    <input
                      onChange={(e) => setOldPassword(e.target.value)}
                      type="password"
                      value={oldPassword}
                      className={classnames("form-control", {
                        "is-invalid": error.oldPassword,
                      })}
                      id="emailId"
                    />
                    {error.oldPassword && (
                      <div classNameName="invalid-feedback">
                        {error.oldPassword}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="passwordId">New Password</label>
                    <input
                      onChange={(e) => setNewPassword(e.target.value)}
                      value={newPassword}
                      className={classnames("form-control", {
                        "is-invalid": error.newPassword,
                      })}
                      type="password"
                      id="passwordId"
                    />
                    {error.newPassword && (
                      <div classNameName="invalid-feedback">
                        {error.newPassword}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="passwordCId">Confirm New Password</label>
                    <input
                      onChange={(e) => setConfirmNewPassword(e.target.value)}
                      value={confirmNewPassword}
                      className={classnames("form-control", {
                        "is-invalid": error.confirmNewPassword,
                      })}
                      type="password"
                      id="passwordCId"
                    />
                    {error.confirmNewPassword && (
                      <div classNameName="invalid-feedback">
                        {error.confirmNewPassword}
                      </div>
                    )}
                  </div>
                  <button type="submit" className="btn btn-info btn-block ">
                    Update Password
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        history.push("/")
      )}
    </div>
  );
};

export default FacultyUpdatePassword;
