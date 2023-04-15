import IndvCards from "./IndvCard";
import React from "react";
import { UserContext } from "../../Store/UserContext";
import emptyImage from "../../images/empty.png";

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

  const globalDueDate = "Today";

  //   Would receive globalDueDate and fakeData from context

  const indvCards = userCtx.skills.map((skill) => (
    <IndvCards
      key={skill.id}
      skillName={skill.skillName}
      sessionsCompleted={skill.sessionsCompleted}
      sessionGoal={skill.sessionGoal}
      id={skill.id}
    />
  ));

  return (
    <section className="w-full">
      <h2 className="text-2xl">Due {compareDate(globalDueDate)}</h2>
      <section>
        {indvCards.length > 0 ? (
          indvCards
        ) : (
          <>
            <div className="flex items-center flex-col p-5">
              <img src={emptyImage} alt="" className="max-w-md" />
              <p className="font-bold text-lg">
                You have nothing due yet because you haven't added any skills to
                practice yet, create one now!
              </p>
            </div>
          </>
        )}
      </section>
    </section>
  );
};

export default DueToday;
