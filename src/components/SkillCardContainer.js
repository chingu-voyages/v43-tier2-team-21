import { SkillCard } from "./SkillCard";
import { useContext } from "react";
import { UserContext } from "../App";

export const SkillCardContainer = () => {
	const fakeData = [
	  { skillName: "Piano", goal: 8, completedSessions:2 },
	  { skillName: "Danish", goal: 7, completedSessions:1 },
	  { skillName: "Crochet", goal: 5, completedSessions:2 },
	  { skillName: "Guitar", goal: 5, completedSessions:2 },
	  { skillName: "Jiu-jitsu", goal: 5, completedSessions:2 },
	  { skillName: "Writing", goal: 5, completedSessions:2 },
	  { skillName: "Exercise", goal: 5, completedSessions:2 }
	];
	const { currentUser, skills } = useContext(UserContext)
	console.log(currentUser);
	console.log(skills[0].skillName)

	const skillCards = fakeData.map((skill) =>{
		return(
			<SkillCard 
			key={skill.skillName}
			skillData={skill}
			/>
		)
	});
 
	return (
		<section>
			<h2 className="text-center text-lg">My Skills</h2>
			<div className="flex flex-wrap">{skillCards}</div>
	  	</section>
	);
  };
  