import { useNavigate } from "react-router";

const IndvCards = ({ skillName, sessionsCompleted, totalGoal }) => {
  const navigate = useNavigate();
  // const timeInHours = totalGoal * timeLeft;
  // const timeInMinutes = timeInHours * 60;
  console.log(sessionsCompleted);

  const progressStyling = {
    right: 100 - (sessionsCompleted / totalGoal) * 100 + "%",
  };

  function transport() {
    navigate(`/practice/${skillName}`);
  }

  return (
    <article
      onClick={transport}
      className="group relative  flex justify-between border border-black  rounded-3xl p-5 my-3 cursor-pointer shadow-xl overflow-hidden"
    >
      <div
        style={progressStyling}
        className="bg-sky-100/50 absolute top-0 left-0 bottom-0  group-hover:bg-sky-100/10 ease-in-out duration-300"
      ></div>
      <h3 className="font-bold">{skillName}</h3>
      <p>
        <span className="font-bold">Sessions Remaining: </span>
        {totalGoal - sessionsCompleted} / {totalGoal}
        {/* {timeInMinutes < 60
          ? ` ${timeInMinutes} minutes`
          : ` ${timeInHours} hours`} */}
      </p>
    </article>
  );
};

export default IndvCards;
