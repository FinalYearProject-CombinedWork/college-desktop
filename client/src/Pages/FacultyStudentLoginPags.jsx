import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { facultyLogin } from "../redux/action/facultyAction";
import { studentLogin } from "../redux/action/studentAction";
import classnames from "classnames";
<<<<<<< Updated upstream
import "../SCSS/LoginPage.scss";
=======

// import '../Style/facultyStudentLogin.css'
>>>>>>> Stashed changes

const FacultyStudentLoginPags = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const [facultyRegNum, setFacultyRegNum] = useState("");
  const [facultyPassword, setFacultyPassword] = useState("");
  const [studentRegNum, setStudentRegNum] = useState("");
  const [studentPassword, setStudentPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [errorsHelper, setErrorsHelper] = useState({});
  const [isFacultyLoading, setIsFacultyLoading] = useState(false);
  const [isStudentLoading, setIsStudentLoading] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (store.faculty.isAuthenticated) {
      history.push("/faculty");
    }
  }, [store.faculty.isAuthenticated]);

  useEffect(() => {
    if (store.error) {
      setErrors(store.error);
    }
  }, [store.error]);
  useEffect(() => {
    if (store.student.isAuthenticated) {
      history.push("/home");
    }
  }, [store.student.isAuthenticated]);

  useEffect(() => {
    if (store.errorHelper) {
      setErrorsHelper(store.errorHelper);
    }
  }, [store.errorHelper]);

  const facultyFormHandler = (e) => {
    e.preventDefault();
    let registrationNumber;
    let password;
    setIsFacultyLoading(true);
    dispatch(
      facultyLogin({
        registrationNumber: facultyRegNum,
        password: facultyPassword,
      })
    );
  };

  useEffect(() => {
    if (store.error || store.faculty.isAuthenticated) {
      setIsFacultyLoading(false);
    } else {
      setIsFacultyLoading(true);
    }
  }, [store.error, store.faculty.isAuthenticated]);

  const studentFormHandler = (e) => {
    e.preventDefault();
    let registrationNumber;
    let password;
    setIsStudentLoading(true);
    dispatch(
      studentLogin({
        registrationNumber: studentRegNum,
        password: studentPassword,
      })
    );
  };

  useEffect(() => {
    if (store.errorHelper || store.student.isAuthenticated) {
      setIsStudentLoading(false);
    } else {
      setIsStudentLoading(false);
    }
  }, [store.errorHelper, store.student.isAuthenticated]);

  return (
<<<<<<< Updated upstream
    <div className="container-fluid LoginPage">
      <div className="row " id="trail">
        <div className="col-md-6 ">
          <div className="row Faculty">
            <div
              className="col-md-9 m-auto border "
              style={{
                backgroundColor: "white",
                borderRadius: "0.3rem",
                padding: "1rem",
              }}
            >
              <div>
                <h3 className="text-center Faculty__Heading ">FACULTY LOGIN</h3>
                <form noValidate onSubmit={facultyFormHandler}>
                  <div className="form-group">
                    <label className="Label" htmlFor="facRegId">
                      Registration Number
                    </label>
=======
    <div className="container-fluid">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="row" id="trail">
        <div className="col-md-6">
          <div className="row m-5">
            <div
              className="col-md-8 m-auto border"
              style={{
                backgroundColor: "white",
                borderRadius: "1.2rem",
                padding: "1rem 1rem 0rem 1rem",
              }}
            >
              <div>
                <h3 className="text-center ">FACULTY</h3>
                <form noValidate onSubmit={facultyFormHandler}>
                  <div className="form-group">
                    <label htmlFor="facRegId">Registration Number</label>
>>>>>>> Stashed changes
                    <input
                      onChange={(e) => setFacultyRegNum(e.target.value)}
                      type="text"
                      value={facultyRegNum}
                      className={classnames("form-control", {
                        "is-invalid": errors.registrationNumber,
                      })}
                      id="facRegId"
                    />
                    {errors.registrationNumber && (
                      <div className="invalid-feedback">
                        {errors.registrationNumber}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
<<<<<<< Updated upstream
                    <label className="Label" htmlFor="passwordFacId">
                      Password
                    </label>
=======
                    <label htmlFor="passwordFacId">Password</label>
>>>>>>> Stashed changes
                    <input
                      onChange={(e) => setFacultyPassword(e.target.value)}
                      value={facultyPassword}
                      className={classnames("form-control", {
                        "is-invalid": errors.password,
                      })}
                      type="password"
                      id="passwordFacId"
                    />
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                  </div>
<<<<<<< Updated upstream
                  <div class="row justify-content-center text-center">
=======
                  <div class="row justify-content-center">
>>>>>>> Stashed changes
                    <div class="col-md-1">
                      {isFacultyLoading && (
                        <div class="spinner-border text-primary" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {!isFacultyLoading && (
<<<<<<< Updated upstream
                    <button type="submit" className="btn Button btn-block">
=======
                    <button type="submit" className="btn btn-info btn-block">
>>>>>>> Stashed changes
                      Login
                    </button>
                  )}
                </form>
                <p className="text-center mt-2 ">
                  <Link className="text-center" to="/forgotPassword/faculty">
                    Forgot Password
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
<<<<<<< Updated upstream
          <div className="row Student">
            <div
              className="col-md-9 m-auto border"
              style={{
                backgroundColor: "white",
                borderRadius: "0.3rem",
                padding: "1rem",
              }}
            >
              <div>
                <h3 className="text-center Student__Heading">STUDENT LOGIN</h3>
                <form noValidate onSubmit={studentFormHandler}>
                  <div className="form-group">
                    <label className="Label" htmlFor="studentId">
                      Registration Number
                    </label>
=======
          <div className="row m-5">
            <div
              className="col-md-8 m-auto border"
              style={{
                backgroundColor: "white",
                borderRadius: "1.2rem",
                padding: "1rem 1rem 0rem 1rem",
              }}
            >
              <div>
                <h3 className="text-center">STUDENT</h3>
                <form noValidate onSubmit={studentFormHandler}>
                  <div className="form-group">
                    <label htmlFor="studentId">Registration Number</label>
>>>>>>> Stashed changes
                    <input
                      onChange={(e) => setStudentRegNum(e.target.value)}
                      type="text"
                      value={studentRegNum}
                      className={classnames("form-control", {
                        "is-invalid": errorsHelper.registrationNumber,
                      })}
                      id="studentId"
                    />
                    {errorsHelper.registrationNumber && (
                      <div className="invalid-feedback">
                        {errorsHelper.registrationNumber}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
<<<<<<< Updated upstream
                    <label className="Label" htmlFor="passwordId">
                      Password
                    </label>
=======
                    <label htmlFor="passwordId">Password</label>
>>>>>>> Stashed changes
                    <input
                      onChange={(e) => setStudentPassword(e.target.value)}
                      value={studentPassword}
                      className={classnames("form-control", {
                        "is-invalid": errorsHelper.password,
                      })}
                      type="password"
                      id="passwordId"
                    />
                    {errorsHelper.password && (
                      <div className="invalid-feedback">
                        {errorsHelper.password}
                      </div>
                    )}
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-md-1">
                      {isStudentLoading && (
                        <div class="spinner-border text-primary" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                      )}
                    </div>
                  </div>
                  {!isStudentLoading && (
<<<<<<< Updated upstream
                    <button type="submit" className="btn btn-block Button ">
=======
                    <button type="submit" className="btn btn-info btn-block ">
>>>>>>> Stashed changes
                      Login
                    </button>
                  )}
                </form>
<<<<<<< Updated upstream
                <p className="text-center mt-2">
=======
                <p className="text-center">
>>>>>>> Stashed changes
                  <Link className="text-center" to="/forgotPassword/student">
                    Forgot Password
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
<<<<<<< Updated upstream
        <button
          type="button"
          class="btn btn-warning ml-auto mr-auto admin-Button"
        >
=======
        <br />
        <br />
        <br />
        <br />
        <button type="button" class="btn btn-warning ml-auto mr-auto">
>>>>>>> Stashed changes
          <Link className="text-center" to="/adminlogin">
            Admin
          </Link>
        </button>
      </div>
    </div>
  );
};

export default FacultyStudentLoginPags;
