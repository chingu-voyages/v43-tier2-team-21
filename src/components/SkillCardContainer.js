import { SkillCard } from "./SkillCard";
import { AddskillBtn } from "./AddskillBtn";

export const SkillCardContainer = ({ toggleAdding }) => {
  const fakeData = [
    { skillName: "Piano", goal: 8, completedSessions: 2 },
    { skillName: "Danish", goal: 7, completedSessions: 1 },
    { skillName: "Crochet", goal: 5, completedSessions: 2 },
    { skillName: "Guitar", goal: 5, completedSessions: 2 },
    { skillName: "Jiu-jitsu", goal: 5, completedSessions: 2 },
    { skillName: "Writing", goal: 5, completedSessions: 2 },
    { skillName: "Exercise", goal: 5, completedSessions: 2 },
  ];

  const skillCards = fakeData.map((skill) => {
    return <SkillCard key={skill.skillName} skillData={skill} />;
  });

  return (
    <section>
      <div className="flex justify-between items-center py-3 mb-3">
        <h2 className=" text-3xl">My Skills</h2>
        <AddskillBtn toggleAdding={toggleAdding} />
      </div>
      <div className="flex overflow-x-auto max-w-5xl scroll pb-4">
        {skillCards}
      </div>
    </section>
  );
};
