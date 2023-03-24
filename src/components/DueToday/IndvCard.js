const IndvCards = ({ skillName, timeLeft, totalGoal }) => {
  const timeInHours = totalGoal * timeLeft;
  const timeInMinutes = timeInHours * 60;

  const progressStyling = {
    right: timeLeft * 100 + "%",
  };

  return (
    <article className="group relative  flex justify-between border-solid border-black border-2 rounded-3xl p-4 my-3 cursor-pointer shadow-xl overflow-hidden">
      <div
        style={progressStyling}
        className="bg-teal-400 absolute top-0 left-0 bottom-0 opacity-40 group-hover:bg-teal-300 ease-in-out duration-300"
      ></div>
      <h3 className="font-bold">{skillName}</h3>
      <p>
        <span className="font-bold">Time Remaining:</span>
        {timeInMinutes < 60
          ? ` ${timeInMinutes} minutes`
          : ` ${timeInHours} hours`}
      </p>
    </article>
  );
};

export default IndvCards;
