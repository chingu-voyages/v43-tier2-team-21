import React from "react";
import { createContext, useState, useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router";
import SkillForm from "./components/SkillForm";
import Timer from "./components/Timer"
import NavBar from "./components/NavBar";
import AuthForm from "./components/Auth";
import CreateSkillModal from "./components/Modals/CreateSkillModal";


export const UserContext = createContext(null)
//temp variables for testing data fetching.
export const KEY = "AIzaSyBs2CqQXXU3zdnT0x9fFOXeGIrpELVYAc4"
export const USER1= "OXEeBhhuvdMr0a4dIbAevf82O9H2"
export const USER2= "Ucep7DdGfiVrgkgtZEnuuXfKmPv1"

export default function App() {
  const [Data, setData] = useState({ name: "hello", skills: { name: "test", sessionsCompleted: 0, sessionsGoal: 2 } })
  const [showAddModal, setShowAddModal] = React.useState(false);
  const currentUser = USER1;

  function toggleAdding() {
    setShowAddModal((prev) => !prev);
  }
  console.log(showAddModal);

  useEffect(() => {
    fetch(`https://skill-tracker-b900e-default-rtdb.firebaseio.com/users/${currentUser}.json?print=pretty`)
      .then((response) => response.json())
      .then((data) => setData(data))
  }, []);

  return (
    <UserContext.Provider value={Data}>
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
