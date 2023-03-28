import React from "react";
import DueToday from "../components/DueToday/DueToday";
import { SkillCardContainer } from "../components/SkillCardContainer";
import EmptyModal from "../components/Modals/EmptyModal";
import CreateSkillModal from "../components/Modals/CreateSkillModal";

const Dashboard = () => {
  const [isAdding, setIsAdding] = React.useState(false);

  const containerSectionStyle = "my-10 w-full";

  function toggleAdding() {
    setIsAdding((prev) => !prev);
  }

  return (
    <div className="flex flex-col items-center max-w-5xl mx-auto">
      <div className={containerSectionStyle}>
        <SkillCardContainer toggleAdding={toggleAdding} />
      </div>
      <div className={containerSectionStyle}>
        <DueToday />
      </div>
      {isAdding && <CreateSkillModal toggleAdding={toggleAdding} />}
      <EmptyModal />
    </div>
  );
};

export default Dashboard;
