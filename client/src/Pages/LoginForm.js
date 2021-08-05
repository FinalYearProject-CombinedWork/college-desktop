import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
// import classnames from "classnames";
import "../SCSS/LoginForm.scss";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import { adminLogin } from "../redux/action/adminAction";
import { facultyLogin } from "../redux/action/facultyAction";
import { studentLogin } from "../redux/action/studentAction";

function LoginForm() {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const history = useHistory();
  const [Faculty, setFaculty] = useState(true);
  const [Student, setStudent] = useState(false);
  const [Admin, setAdmin] = useState(false);
  const [UserId, setUserId] = useState("");
  const [PassWord, setPassWord] = useState("");
  const [ShowPassword, setShowPassword] = useState(false);
  const [Error, setError] = useState({});
  const [ErrorsHelper, setErrorsHelper] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    store.admin.isAuthenticated
      ? history.push("/admin")
      : store.faculty.isAuthenticated
      ? history.push("/faculty")
      : store.student.isAuthenticated && history.push("/home");
  }, [
    store.admin.isAuthenticated,
    store.faculty.isAuthenticated,
    store.student.isAuthenticated,
  ]);

  useEffect(() => {
    if (store.error) {
      setError(store.error);
    }
  }, [store.error]);

  const AdminLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    dispatch(adminLogin({ registrationNumber: UserId, password: PassWord }));
  };

  useEffect(() => {
    if (store.error || store.admin.isAuthenticated) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [store.error, store.admin.isAuthenticated]);

  useEffect(() => {
    if (store.error) {
      setError(store.error);
    }
  }, [store.error]);

  useEffect(() => {
    if (store.errorHelper) {
      setErrorsHelper(store.errorHelper);
    }
  }, [store.errorHelper]);

  const facultyFormHandler = (e) => {
    e.preventDefault();
    // let registrationNumber;
    // let password;
    // setIsFacultyLoading(true);
    dispatch(
      facultyLogin({
        registrationNumber: UserId,
        password: PassWord,
      })
    );
  };

  useEffect(() => {
    if (store.error || store.faculty.isAuthenticated) {
      // setIsFacultyLoading(false);
    } else {
      // setIsFacultyLoading(true);
    }
  }, [store.error, store.faculty.isAuthenticated]);

  const studentFormHandler = (e) => {
    e.preventDefault();
    // let registrationNumber;
    // let password;
    // setIsStudentLoading(true);
    dispatch(
      studentLogin({
        registrationNumber: UserId,
        password: PassWord,
      })
    );
  };

  useEffect(() => {
    if (store.errorHelper || store.student.isAuthenticated) {
      // setIsStudentLoading(false);
    } else {
      // setIsStudentLoading(false);
    }
  }, [store.errorHelper, store.student.isAuthenticated]);

  return (
    <div className="LoginForm">
      <div className="LeftConatiner">
        <div className="Logo">
          <img src="/Assets/Logo2.png" alt="logo" />
          <h2> VidyaShalla</h2>
        </div>
        <h1>Login As</h1>
        <div className="groupButttons">
          <div
            onClick={() => {
              setFaculty(true);
              setAdmin(false);
              setStudent(false);
            }}
            className={Faculty ? "Login Buttons" : "Buttons"}
          >
            <img src="/Assets/Teacher.png" alt="TeacherIcon" />
            <h2>Faculty</h2>
          </div>
          <div
            onClick={() => {
              setFaculty(false);
              setAdmin(false);
              setStudent(true);
            }}
            className={Student ? "Login Buttons" : "Buttons"}
          >
            <img src="/Assets/student.png" alt="TeacherIcon" />
            <h2>Student</h2>
          </div>
          <div
            onClick={() => {
              setFaculty(false);
              setAdmin(true);
              setStudent(false);
            }}
            className={Admin ? "Login Buttons" : "Buttons"}
          >
            <img src="/Assets/admin.png" alt="AdminIcon" />
            <h2>Admin</h2>
          </div>
        </div>
      </div>
      <div className="RightConatiner">
        <div className="Form">
          <h2>
            {Faculty ? (
              <span>Faculty </span>
            ) : Student ? (
              <span>Student </span>
            ) : (
              <span>Admin </span>
            )}
            Login
          </h2>
          <div className="InputFields">
            <label className="Headings" htmlFor="UserId">
              Enter Your UserId
            </label>
            <TextField
              type="text"
              autoComplete="userid"
              value={UserId}
              onChange={(e) => setUserId(e.target.value)}
              id="UserId"
              label="UserId"
              variant="outlined"
            />
            <label className="Headings" htmlFor="PassWord">
              Enter PassWord
            </label>
            <FormControl variant="outlined">
              <InputLabel htmlFor="Password">Password</InputLabel>
              <OutlinedInput
                id="Password"
                type={ShowPassword ? "text" : "password"}
                value={PassWord}
                onChange={(e) => setPassWord(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!ShowPassword)}
                      // onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {ShowPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
            <div
              onClick={(e) => facultyFormHandler(e)}
              className={Faculty ? "FcaultyButton LoginButton" : "HideButton"}
            >
              <p>LOGIN AS FACULTY</p>
            </div>
            <div
              onClick={(e) => studentFormHandler(e)}
              className={Student ? "StudentButton LoginButton" : "HideButton"}
            >
              <p>LOGIN AS STUDENT</p>
            </div>
            <div
              onClick={(e) => AdminLogin(e)}
              className={Admin ? "AdminButton LoginButton" : "HideButton"}
            >
              <p>LOGIN AS ADMIN</p>
            </div>
            {Faculty ? (
              <p className="text-center mt-2 ">
                Forgot PassWord ?
                <Link className="text-center" to="/forgotPassword/faculty">
                  {"  "} Change PassWord
                </Link>
              </p>
            ) : (
              Student && (
                <p className="text-center mt-2 ">
                  Forgot PassWord ?
                  <Link className="text-center" to="/forgotPassword/student">
                    {"  "} Change PassWord
                  </Link>
                </p>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
