const exUser ={
	name: "testee",
	skills: [
		{skill:"piano", sessionsGoal:6, sessionsCompleted:2},
		{skill:"guitar", sessionsGoal:6, sessionsCompleted:5}
	]
}

export const SkillCard = () =>{
	return (
		<div onClick={() =>console.log("clicked")}className={
			`box-border h-48 w-48 m-2
			grid content-evenly justify-center
			border border-black rounded-lg bg-sky-100 shadow-md
			font-serif`}>
			<h1 className={`text-3xl`}>Piano</h1>
			<div className={`text-3xl text-center`}>4 / 6</div>
		</div>
	)
}