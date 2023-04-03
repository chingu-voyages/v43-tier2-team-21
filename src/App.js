import SkillForm from "./components/SkillForm";
import React from "react";
import { Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import Timer from "./components/Timer";
import { createContext, useState } from "react";
import NavBar from "./components/NavBar";
import AuthForm from "./components/Auth";
import CreateSkillModal from "./components/Modals/CreateSkillModal";

export const UserContext = createContext(null);

export default function App() {
  const [showAddModal, setShowAddModal] = React.useState(false);

  function toggleAdding() {
    setShowAddModal((prev) => !prev);
  }

  console.log(showAddModal);

  const [data] = useState({
    currentUser: "Test User",
    skills: [
      {
        skillName: "Piano",
        sessionsGoal: 8,
        completedSessions: 2,
        timeLeft: 0.5,
        totalGoal: 3,
      },
      { skillName: "Danish", sessionsGoal: 7, completedSessions: 1 },
      { skillName: "Crochet", sessionsGoal: 5, completedSessions: 2 },
      {
        skillName: "Violin",
        sessionsGoal: 5,
        completedSessions: 2,
        timeLeft: 0.33,
        totalGoal: 2,
      },
      { skillName: "Jiu-jitsu", sessionsGoal: 5, completedSessions: 2 },
      { skillName: "Writing", sessionsGoal: 5, completedSessions: 2 },
      {
        skillName: "Spanish",
        sessionsGoal: 5,
        completedSessions: 2,
        timeLeft: 0.33,
        totalGoal: 1,
      },
    ],
  });

  return (
    <UserContext.Provider value={data}>
      <NavBar toggleAdding={toggleAdding} />
      <Routes>
        <Route path="/landingpage" element={<LandingPage />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              showAddModal={showAddModal}
              toggleAdding={toggleAdding}
            />
          }
        />
        <Route path="/edit" element={<SkillForm />} />
        <Route path="/practice/*" element={<Timer />} />
        <Route path="/auth" element={<AuthForm />} />
        <Route
          path="*"
          element={
            <Dashboard
              showAddModal={showAddModal}
              toggleAdding={toggleAdding}
            />
          }
        />
      </Routes>
    </UserContext.Provider>
  );
}
