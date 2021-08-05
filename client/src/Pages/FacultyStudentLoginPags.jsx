import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { facultyLogin } from "../redux/action/facultyAction";
import { studentLogin } from "../redux/action/studentAction";
import classnames from "classnames";
import "../SCSS/LoginPage.scss";

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
    // let registrationNumber;
    // let password;
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
    // let registrationNumber;
    // let password;
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
                    <label className="Label" htmlFor="passwordFacId">
                      Password
                    </label>
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
                  <div class="row justify-content-center text-center">
                    <div class="col-md-1">
                      {isFacultyLoading && (
                        <div class="spinner-border text-primary" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {!isFacultyLoading && (
                    <button type="submit" className="btn Button btn-block">
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
                    <label className="Label" htmlFor="passwordId">
                      Password
                    </label>
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
                    <button type="submit" className="btn btn-block Button ">
                      Login
                    </button>
                  )}
                </form>
                <p className="text-center mt-2">
                  <Link className="text-center" to="/forgotPassword/student">
                    Forgot Password
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          class="btn btn-warning ml-auto mr-auto admin-Button"
        >
          <Link className="text-center" to="/adminlogin">
            Admin
          </Link>
        </button>
      </div>
    </div>
  );
};

export default FacultyStudentLoginPags;
