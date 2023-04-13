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
    <nav className="flex justify-between items-center text-xl p-4">
      <Link
        to="/dashboard"
        className="sm:text-xl logo md:text-4xl font-extrabold"
      >
        Skill Tracker
      </Link>
      <div className="links">
        <ul className="flex gap-4 pr-3 font-light items-center">
          {!authCtx.isLoggedIn ? (
            <li>
              <Link to={'/auth'}>Log In</Link>
            </li>
          ) : (
            <li>
              <Button
                className="sm:text-base md:text-lg"
                onClick={authCtx.logout}
              >
                Log Out
              </Button>
            </li>
          )}
          <li>
            <Button
              className="sm:text-base md:text-lg bg-purple-200"
              onClick={handleAdding}
            >
              Add Skill
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
