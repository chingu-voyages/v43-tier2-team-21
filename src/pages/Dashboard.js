import SkillForm from "../components/SkillForm";
import { SkillCard } from "../components/SkillCard";
import Timer from "../components/Timer";
import DueToday from "../components/DueToday/DueToday";

const Dashboard = () => {
  return (
    <>
      <SkillCard />
      <DueToday />
    </>
  );
};

export default Dashboard;
