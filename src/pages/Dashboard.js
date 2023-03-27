import DueToday from "../components/DueToday/DueToday";
import { AddskillBtn } from "../components/AddskillBtn";
import { SkillCardContainer} from "../components/SkillCardContainer"

const Dashboard = () => {
  return (
    <>
      <AddskillBtn />
      <SkillCardContainer />
      <DueToday />
    </>
  );
};

export default Dashboard;
