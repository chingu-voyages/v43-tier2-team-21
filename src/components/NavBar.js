import React from "react";
import { Link } from "react-router-dom";
import Button from "./UI/Button/Button";
import AuthContext from "../Store/AuthContext";
import { useNavigate } from "react-router-dom";

const NavBar = ({ toggleAdding }) => {
  const authCtx = React.useContext(AuthContext);
  const navigate = useNavigate();

  function handleAdding() {
    navigate("/dashboard");
    toggleAdding();
  }

  return (
    <nav className="flex justify-between items-center font-sans text-xl p-2 bg-">
      <Link to="/dashboard" className="logo text-4xl font-extrabold">
        Skill Tracker
      </Link>
      <div className="links">
        <ul className="flex gap-4 pr-3 font-light items-center">
          {!authCtx.isLoggedIn ? (
            <li>
              <Link to={"/auth"}>Log In</Link>
            </li>
          ) : (
            <li>
              <Button onClick={authCtx.logout}>Log Out</Button>
            </li>
          )}
          <li>
            <Button className="ml-0 bg-sky-100" onClick={handleAdding}>
              Add Skill
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
