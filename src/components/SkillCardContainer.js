import { SkillCard } from "./SkillCard";
import { AddskillBtn } from "./AddskillBtn";
import { useContext } from "react";
import { UserContext } from "../Store/UserContext";

export const SkillCardContainer = ({ toggleAdding }) => {
  const { user, skills } = useContext(UserContext);

  //checks if user has no skills (i.e. new user)

  const skillCards = skills.map((skill, index) => {
    return <SkillCard key={index} id={skill.id} skillData={skill} />;
  });
  // if(skills){
  //   Skills =Object.entries(skills).map((obj)=>obj[1])
  //   skillCards = Skills.map((skill,index) => {
  //     return <SkillCard key={index} id={index} skillData={skill} />;
  //   });
  // }else{
  //   Skills =null
  // }

  if (skills.length > 0) {
    return (
      <section>
        <div className="flex justify-between items-center p-3 mb-3">
          <h2 className="p-3 text-xl md:text-3xl">My Skills</h2>
          <AddskillBtn toggleAdding={toggleAdding} />
        </div>
        <div className="flex flex-col items-center md:flex-row justify-center overflow-x-auto max-w-5xl scroll pb-4">
          {skillCards}
        </div>
      </section>
    );
  }
};
