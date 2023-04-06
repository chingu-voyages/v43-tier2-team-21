import { SkillCard } from "./SkillCard";
import { AddskillBtn } from "./AddskillBtn";
import { useContext } from "react";
import { UserContext } from "../Store/UserContext";

export const SkillCardContainer = ({toggleAdding}) => {
  const {name, skills} = useContext(UserContext);
  const Skills =Object.entries(skills).map((obj)=>obj[1])
  console.log(name)
  console.log(Skills)
  
  const skillCards = Skills.map((skill,index) => {
    return <SkillCard key={index} skillData={skill} />;
  });

  return (
    <section>
      <div className="flex justify-between items-center py-3 mb-3">
        <h2 className=" text-3xl">{name}'s Skills</h2>
        <AddskillBtn toggleAdding={toggleAdding} />
      </div>
      <div className="flex overflow-x-auto max-w-5xl scroll pb-4">
        {skillCards}
      </div>
    </section>
  );
 };