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
    { skillName: "Piano", sessionsCompleted: 2, totalGoal: 3 },
    { skillName: "Spanish", sessionsCompleted: 1, totalGoal: 5 },
    { skillName: "Violin", sessionsCompleted: 1, totalGoal: 2 },
  ];

  const globalDueDate = "Friday";

  //   Would receive globalDueDate and fakeData from context

  const indvCards = fakeData.map((skill) => (
    <IndvCards
      key={skill.skillName}
      skillName={skill.skillName}
      sessionsCompleted={skill.sessionsCompleted}
      totalGoal={skill.totalGoal}
    />
  ));

  return (
    <section className="w-full">
      <h2 className="text-2xl">Due {compareDate(globalDueDate)}</h2>
      <section>{indvCards}</section>
    </section>
  );
};

export default DueToday;
