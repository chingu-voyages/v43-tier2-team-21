import { SkillCard } from "../components/SkillCard";
import Timer from "../components/Timer";
import DueToday from "../components/DueToday/DueToday";
import EmptyModal from "../components/Modals/EmptyModal";
import CreateSkillModal from "../components/Modals/CreateSkillModal";

const Dashboard = () => {
  return (
    <>
      <SkillCard />
      <Timer />
      <DueToday />
      <EmptyModal />
      <CreateSkillModal />
    </>
  );
};

export default Dashboard;
