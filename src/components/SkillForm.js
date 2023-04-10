import React from "react";
import { useLocation } from "react-router-dom";
import InputSection from "./UI/InputSection";
import { UserContext } from "../Store/UserContext";

const initialState = {
  skillName: "",
  skillNameTouched: false,
  timeGoal: 0,
  timeGoalTouched: false,
  sessionGoal: 0,
  sessionGoalTouched: false,
};

const SkillForm = ({ prepopulatedData, closeModal }) => {
  const userCtx = React.useContext(UserContext);
  //-------------------------------------
  //Matt trying to pass skill-data as props from SkillCard.
  const location = useLocation();
  const data = location.state;
  if (data) {
    prepopulatedData = data;
  }
  //--------------------------------------

  const [skillData, setSkillData] = React.useState(
    prepopulatedData ? prepopulatedData : initialState
  );
  const [triedSubmit, setTriedSubmit] = React.useState(false);

  const {
    skillName,
    timeGoal,
    sessionGoal,
    skillNameTouched,
    timeGoalTouched,
    sessionGoalTouched,
  } = skillData;

  const skillNameHasError = skillNameTouched && skillName.length === 0;
  const timeGoalHasError = timeGoalTouched && !timeGoal;
  const sessionGoalHasError = sessionGoalTouched && !sessionGoal;
  const anyErrors =
    skillNameHasError || timeGoalHasError || sessionGoalHasError;

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
      sessionGoalTouched: true,
    }));

    if (!timeGoal || !sessionGoal || !skillNameTouched) {
      console.log("Error occured, no submit");
      setTriedSubmit(true);
      return;
    }

    console.log("Submitted");
    userCtx.addSkill({ skillName, timeGoal, sessionGoal });
    setSkillData(initialState);
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-lg font-bold">
        {prepopulatedData
          ? `Edit Preferences for ${data.name}`
          : "Add New Skill"}
      </h2>
      <InputSection
        name="skillName"
        placeholder={prepopulatedData ? data.name : "e.g. piano"}
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
        placeholder={prepopulatedData ? data.timeGoal : "e.g. 3"}
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
        name="sessionGoal"
        placeholder={prepopulatedData ? data.sessionsGoal : "e.g. 5"}
        value={sessionGoal}
        label="How many times a week would you like to practice?"
        hasError={sessionGoalHasError}
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
