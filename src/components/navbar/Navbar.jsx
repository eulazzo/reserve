import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to={"/"}>
          <span className="logo">RESERVE</span>
        </Link>
        {!user ? (
          <div className="navItems">
            <button className="navBar">Register</button>
            <button className="navBar">Login</button>
          </div>
        ) : (
          <div className="navItemsUser">
            <p className="username">Welcome {user.username}</p>
            <img
              src="https://img.freepik.com/free-vector/person-avatar-design_24877-38137.jpg?w=360"
              className="picImg"
              alt="profile-user-pic"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
