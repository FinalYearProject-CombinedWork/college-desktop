import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { adminLogin } from "../redux/action/adminAction";
import classnames from "classnames";

const LoginPage = () => {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  useEffect(() => {
    if (store.admin.isAuthenticated) {
      history.push("/admin");
    }
  }, [store.admin.isAuthenticated]);
  useEffect(() => {
    if (store.error) {
      setError(store.error);
    }
  }, [store.error]);

  const fromHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    dispatch(adminLogin({ registrationNumber, password }));
  };

  useEffect(() => {
    if (store.error || store.admin.isAuthenticated) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [store.error, store.admin.isAuthenticated]);

  return (
    <div className="container ADMIN">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="d-flex ADMIN__container">
            <div className="ADMIN__container__FORM">
              <h1 className="text-center Admin__Heading">ADMIN LOGIN</h1>
              <form noValidate onSubmit={fromHandler}>
                <div className="form-group">
                  <label className="Label" htmlFor="emailId">
                    Registration Number
                  </label>
                  <input
                    onChange={(e) => setRegistrationNumber(e.target.value)}
                    type="text"
                    value={registrationNumber}
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": error.registrationNumber,
                    })}
                    id="emailId"
                  />
                  {error.registrationNumber && (
                    <div className="invalid-feedback">
                      {error.registrationNumber}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label className="Label" htmlFor="passwordId">
                    Password
                  </label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": error.password,
                    })}
                    type="password"
                    id="passwordId"
                  />
                  {error.password && (
                    <div className="invalid-feedback">{error.password}</div>
                  )}
                </div>
                <div class="row justify-content-center text-center">
                  <div class="col-md-1">
                    {isLoading && (
                      <div class="spinner-border text-primary" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>
                    )}
                  </div>
                </div>
                {!isLoading && (
                  <button
                    type="submit"
                    className="btn btn-info btn-block mb-3 Button"
                  >
                    Login
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
