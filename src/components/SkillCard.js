import {Link} from "react-router-dom";

export const SkillCard = () => {
  return (
    <div
      onClick={() => console.log("clicked")}
      className={`box-border h-48 w-48 m-2
				grid content-evenly justify-center
				border border-black rounded-lg bg-sky-100 shadow-md
				font-serif`}
    >
      <h1 className={`text-3xl text-center`}>Piano</h1>
      <div className={`text-3xl text-center`}>4 / 6</div>
      <div className={`h-8 w-48 flex justify-evenly`}>
        <Link to={"/edit"}>Edit</Link>
        <Link to={"/timer"}>Start</Link>
      </div>
    </div>
  );
};
