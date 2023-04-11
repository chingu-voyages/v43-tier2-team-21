import React from "react";
import DueToday from "../components/DueToday/DueToday";
import { SkillCardContainer } from "../components/SkillCardContainer";
import EmptyModal from "../components/Modals/EmptyModal";
import CreateSkillModal from "../components/Modals/CreateSkillModal";
import { UserContext } from "../Store/UserContext";

const Dashboard = ({ toggleAdding, showAddModal }) => {
  const containerSectionStyle = "my-10 w-full";
  const userCtx = React.useContext(UserContext);

  return (
    <div className="flex flex-col items-center max-w-5xl mx-auto">
      <div className={containerSectionStyle}>
        <SkillCardContainer toggleAdding={toggleAdding} />
      </div>
      <div className={containerSectionStyle}>
        <DueToday />
      </div>
      {showAddModal && <CreateSkillModal toggleAdding={toggleAdding} />}
      {!showAddModal && !userCtx.skills && (
        <EmptyModal toggleAdding={toggleAdding} />
      )}
    </div>
  );
};

export default Dashboard;
