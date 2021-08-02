import React, { useState } from "react";
import "../SCSS/LoginForm.scss";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";

function LoginForm() {
  const [Faculty, setFaculty] = useState(true);
  const [Student, setStudent] = useState(false);
  const [Admin, setAdmin] = useState(false);
  const [UserId, setUserId] = useState("");
  const [PassWord, setPassWord] = useState("");
  const [ShowPassword, setShowPassword] = useState(false);

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
          <h2>Faculty Login</h2>
          <div className="InputFields">
            <label className="Headings" htmlFor="UserId">
              Enter Your UserId
            </label>
            <TextField
              autoCapitalize={true}
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
              className={Faculty ? "FcaultyButton LoginButton" : "HideButton"}
            >
              <p>LOGIN AS FACULTY</p>
            </div>
            <div
              className={Student ? "StudentButton LoginButton" : "HideButton"}
            >
              <p>LOGIN AS STUDENT</p>
            </div>
            <div className={Admin ? "AdminButton LoginButton" : "HideButton"}>
              <p>LOGIN AS ADMIN</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
