import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">
          {" "}
           RESERVE
        </span>
        <div className="navItems">
          <button className="navBar">Register</button>
          <button className="navBar">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
