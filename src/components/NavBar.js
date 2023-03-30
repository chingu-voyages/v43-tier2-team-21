import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center font-sans text-xl p-2 bg-">
      <div className="logo text-4xl font-extrabold">Skill Tracker</div>
      <div className="links">
        <ul className="flex gap-4 pr-3 font-light">
          <li>
            <Link to={'/dashboard'}>Sign Up!</Link>
          </li>
          <li>
            <Link to={'/dashboard'}>Log In</Link>
          </li>
          <li>
            <Link to={'/addskill'}>Add Skill</Link>
          </li>
          <li>
            <Link to={'/edit'}>Edit Skill</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;