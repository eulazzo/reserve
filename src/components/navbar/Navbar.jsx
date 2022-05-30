import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to={"/"}>
          <span className="logo">RESERVE</span>
        </Link>
        <div className="navItems">
          <button className="navBar">Register</button>
          <button className="navBar">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
