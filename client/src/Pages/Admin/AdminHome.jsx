import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import AdminHomeHelper from "../../Components/AdminHomeHelper";
import "../../SCSS/Admin.scss";
import MenuIcon from "@material-ui/icons/Menu";

const AdminHome = () => {
  const store = useSelector((store) => store);
  const [ShowNav, setShowNav] = useState(false);
  const SetHide = () => {
    setShowNav(!ShowNav);
  };

  const history = useHistory();
  return (
    <div>
      {store.admin.isAuthenticated ? (
        <div style={{ display: "flex" }}>
          <div
            className={ShowNav ? "HelperContainer ShowNav" : "HelperContainer"}
          >
            <AdminHomeHelper SetHide={SetHide} />
          </div>
          <nav className="TopNav">
            <Link className="LogoLink" to="/admin">
              <img src="/Assets/Logo2.png" alt="MainLogo" /> Vidyashalla
            </Link>
            <div onClick={() => setShowNav(!ShowNav)}>
              <MenuIcon />
            </div>
          </nav>
          <div
            onClick={() => setShowNav(!ShowNav)}
            className="container mt-5 Home"
          >
            <h3>Home</h3>
            <div className="row mt-3 HomeMain">
              <div className="col-10 HomeMain__Section">
                <div className="row HomeMain__Section__Div">
                  <div className="col-md-5">
                    <div className="card ImageCard" style={{ width: "17rem" }}>
                      <img
                        className="card-img-top"
                        src={store.admin.admin.avatar}
                        alt="Card cap"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{store.admin.admin.name}</h5>
                        <h5 className="card-title">
                          {store.admin.admin.registrationNumber}
                        </h5>
                        {/* <Link to='/faculty/updateProfile'>UPDATE PROFILE</Link> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <table className="table border">
                      <tbody>
                        <tr>
                          <td>Name</td>
                          <td>{store.admin.admin.name}</td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td>{store.admin.admin.email}</td>
                        </tr>
                        <tr>
                          <td>Registration Number</td>
                          <td>{store.admin.admin.registrationNumber}</td>
                        </tr>
                        <tr>
                          <td>Joining Year</td>
                          <td>{store.admin.admin.joiningYear}</td>
                        </tr>
                        <tr>
                          <td>Department</td>
                          <td>{store.admin.admin.department}</td>
                        </tr>
                        <tr>
                          <td>Contact Number</td>
                          <td>
                            {store.admin.admin.contactNumber
                              ? store.admin.admin.contactNumber
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
    </div>
  );
};

export default AdminHome;
