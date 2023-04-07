import React from "react";
import { useLocation } from "react-router-dom";
import InputSection from "./UI/InputSection";


const initialState = {
  skillName: "",
  skillNameTouched: false,
  timeGoal: 0,
  timeGoalTouched: false,
  pointGoal: 0,
  pointGoalTouched: false,
};

const SkillForm = ({ prepopulatedData }) => {
  //-------------------------------------
  //Matt trying to pass skill-data as props from SkillCard.
  const location = useLocation();
  const data = location.state;
  console.log(data);
  if(data){
    prepopulatedData = data;
  }
  //--------------------------------------

  const [skillData, setSkillData] = React.useState(
    prepopulatedData ? prepopulatedData : initialState
  );
  console.log(skillData)
  const [triedSubmit, setTriedSubmit] = React.useState(false);

  const {
    skillName,
    timeGoal,
    pointGoal,
    skillNameTouched,
    timeGoalTouched,
    pointGoalTouched,
  } = skillData;

  const skillNameHasError = skillNameTouched && skillName.length === 0;
  const timeGoalHasError = timeGoalTouched && !timeGoal;
  const pointGoalHasError = pointGoalTouched && !pointGoal;
  const anyErrors = skillNameHasError || timeGoalHasError || pointGoalHasError;

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

    if (!timeGoal || !pointGoal || !skillNameTouched) {
      console.log("Error occured, no submit");
      setTriedSubmit(true);
      return;
    }

    console.log("Submitted");
    // ... push to context array
    setSkillData(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-lg font-bold">
        {prepopulatedData ? `Edit Preferences for ${data.name}`  : "Add New Skill"}
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
        label="How much time would you like to practice a session?"
        hasError={timeGoalHasError}
        changeHandler={handleChange}
        blurHandler={handleBlur}
        error="Please enter a value"
        type="number"
        min={1}
        max={14}
      />
      <InputSection
        name="pointGoal"
        value={pointGoal}
        label="How many times a week would you like to practice?"
        hasError={pointGoalHasError}
        changeHandler={handleChange}
        blurHandler={handleBlur}
        error="Please enter a value"
        type="number"
        min={1}
        max={14}
      />
      {triedSubmit && anyErrors && (
        <p className="mb-2">Please fix issues above before submitting.</p>
      )}
      <button className="bg-white p-2 rounded shadow-sm hover:bg-yellow-100">
        {prepopulatedData ? "Save changes" : "Add Skill"}
      </button>
    </form>
  );
};
export default SkillForm;
