import IndvCards from "./IndvCard";

function compareDate(date) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const todaysDate = new Date().getDay();
  if (date === days[todaysDate - 1]) {
    return "Today";
  } else {
    return date;
  }
}

const DueToday = () => {
  const fakeData = [
    { skillName: "Piano", timeLeft: 0.5, totalGoal: 3 },
    { skillName: "Spanish", timeLeft: 0.33, totalGoal: 1 },
    { skillName: "Violin", timeLeft: 0.33, totalGoal: 2 },
  ];

  const globalDueDate = "Friday";

  //   Would receive globalDueDate and fakeData from context

  const indvCards = fakeData.map((skill) => (
    <IndvCards
      key={skill.skillName}
      skillName={skill.skillName}
      timeLeft={skill.timeLeft}
      totalGoal={skill.totalGoal}
    />
  ));

  return (
    <section className="max-w-3xl mx-auto">
      <h2 className="text-lg">Due {compareDate(globalDueDate)}</h2>
      <section>{indvCards}</section>
    </section>
  );
};

export default DueToday;
