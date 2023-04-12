import { Link } from "react-router-dom";

export const SkillCard = ({ id, skillData }) => {
  const { skillName, sessionGoal, sessionsCompleted } = skillData;

  return (
    <div
      className={`box-border h-60 w-60 m-2 grid content-evenly justify-center border border-black rounded-lg bg-sky-100 shadow-md font-serif`}
    >
      <h1 className={`text-3xl text-center`}>{skillName}</h1>
      <div className={`text-3xl text-center`}>
        {sessionsCompleted ? sessionsCompleted : "0"} / {sessionGoal}
      </div>
      <div className={`h-8 w-48 flex justify-evenly`}>
        <Link to={`/edit/:${id}`} state={skillData}>
          <EditButton />
        </Link>
        <Link to={`/practice/${id}`}>
          <StartButton />
        </Link>
      </div>
    </div>
  );
};

const EditButton = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
      />
    </svg>
  );
};
const StartButton = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
      />
    </svg>
  );
};
