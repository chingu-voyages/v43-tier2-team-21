import { SkillCard } from "../components/SkillCard";
import DueToday from "../components/DueToday/DueToday";
import { AddskillBtn } from "../components/AddskillBtn";

const Dashboard = () => {
  return (
    <>
      <AddskillBtn />
      <SkillCard />
      <DueToday />
    </>
  );
};

export default Dashboard;
