import { useNavigate } from "react-router";

const IndvCards = ({ skillName, sessionsCompleted, sessionGoal, id }) => {
  const navigate = useNavigate();
  // const timeInHours = totalGoal * timeLeft;
  // const timeInMinutes = timeInHours * 60;

  const progressStyling = {
    right: 100 - (sessionsCompleted / sessionGoal) * 100 + "%",
  };

  function transport() {
    navigate(`/practice/${id}`);
  }

  return (
    <article
      onClick={transport}
      className="m-4 group relative  flex justify-between border border-black  rounded-3xl p-5 my-3 cursor-pointer shadow-xl overflow-hidden"
    >
      <div
        style={progressStyling}
        className="bg-purple-100/50 absolute top-0 left-0 bottom-0  group-hover:bg-purple-100/10 ease-in-out duration-300"
      ></div>
      <h3 className="font-bold">{skillName}</h3>
      <p>
        {sessionsCompleted > sessionGoal ? (
          <span>You reached your goal!</span>
        ) : (
          <>
            <span className="font-bold">Sessions Remaining: </span>
            <span>
              {sessionGoal - sessionsCompleted} / {sessionGoal}
            </span>
          </>
        )}
        {/* {timeInMinutes < 60
          ? ` ${timeInMinutes} minutes`
          : ` ${timeInHours} hours`} */}
      </p>
    </article>
  );
};

export default IndvCards;
