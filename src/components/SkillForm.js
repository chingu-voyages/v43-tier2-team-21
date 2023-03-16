import React from "react";
import InputSection from "./InputSection";

const initialState = {
  skillName: "",
  skillNameTouched: false,
  timeGoal: null,
  timeGoalTouched: false,
  pointGoal: null,
  pointGoalTouched: false,
};

const SkillForm = ({ prepopulatedData }) => {
  const [skillData, setSkillData] = React.useState(
    prepopulatedData ? prepopulatedData : initialState
  );
  const [triedSubmit, setTriedSubmit] = React.useState(false);

  const {
    skillName,
    timeGoal,
    pointGoal,
    skillNameTouched,
    timeGoalTouched,
    pointGoalTouched,
  } = skillData;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setSkillData((prev) => ({ ...prev, [name]: value }));
  };
  const handleBlur = (e) => {
    const { name } = e.target;
    setSkillData((prev) => ({ ...prev, [name + "Touched"]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSkillData((prev) => ({
      ...prev,
      skillNameTouched: true,
      timeGoalTouched: true,
      pointGoalTouched: true,
    }));
    if (skillNameHasError || timeGoalHasError || pointGoalHasError) {
      console.log("Error occured, no submit");
      setTriedSubmit(true);
      return;
    }

    console.log("Submitted");
    // ... push to context array
    setSkillData(initialState);
  };

  const skillNameHasError = skillNameTouched && skillName.length === 0;
  const timeGoalHasError = timeGoalTouched && !timeGoal;
  const pointGoalHasError = pointGoalTouched && !pointGoal;

  return (
    <form onSubmit={handleSubmit} className="bg-sky-100 p-4">
      <h2 className="text-lg font-bold">
        {prepopulatedData ? "Edit Skill Preferences" : "Add New Skill"}
      </h2>
      <InputSection
        name="skillName"
        value={skillName}
        label="Goal Name"
        hasError={skillNameHasError}
        changeHandler={handleChange}
        blurHandler={handleBlur}
        error="Please enter a value"
        type="text"
      />
      <InputSection
        name="timeGoal"
        value={timeGoal}
        label="How much time would you like to practice?"
        hasError={timeGoalHasError}
        changeHandler={handleChange}
        blurHandler={handleBlur}
        error="Please enter a value"
        type="text"
      />
      <InputSection
        name="pointGoal"
        value={pointGoal}
        label="How many times a week would you like to practice?"
        hasError={pointGoalHasError}
        changeHandler={handleChange}
        blurHandler={handleBlur}
        error="Please enter a value"
        type="text"
      />
      {triedSubmit && (
        <p className="mb-2">Please fix issues above before submitting.</p>
      )}
      <button className="bg-white p-2 rounded shadow-sm hover:bg-yellow-100">
        {prepopulatedData ? "Edit Skill" : "Add Skill"}
      </button>
    </form>
  );
};
export default SkillForm;
