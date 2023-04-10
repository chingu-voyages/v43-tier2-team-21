import IndvCards from "./IndvCard";
import React from "react";
import { UserContext } from "../../Store/UserContext";

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
  const userCtx = React.useContext(UserContext);

  const globalDueDate = "Friday";

  //   Would receive globalDueDate and fakeData from context

  const indvCards = userCtx.skills.map((skill) => (
    <IndvCards
      key={skill.skillName}
      skillName={skill.skillName}
      sessionsCompleted={skill.sessionsCompleted}
      sessionGoal={skill.sessionGoal}
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
