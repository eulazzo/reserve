import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to={"/"}>
          <span className="logo">RESERVE</span>
        </Link>
        {!user ? (
          <div className="navItems">
            <button className="navBar">Register</button>
            <Link to={"/login"}>
              <button className="navBar">Login</button>
            </Link>
          </div>
        ) : (
          <div className="navItemsUser">
            <p className="username">Welcome {user.username}</p>
            <FontAwesomeIcon
              onClick={handleLogout}
              style={{ cursor: "pointer" }}
              icon={faArrowRightFromBracket}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
