import DueToday from "../components/DueToday/DueToday";
import { AddskillBtn } from "../components/AddskillBtn";
import { SkillCardContainer} from "../components/SkillCardContainer"
import EmptyModal from "../components/Modals/EmptyModal";
import CreateSkillModal from "../components/Modals/CreateSkillModal";


const Dashboard = () => {
  return (
    <>
      <AddskillBtn />
      <SkillCardContainer />
      <DueToday />
      <EmptyModal />
      <CreateSkillModal />
    </>
  );
};

export default Dashboard;
