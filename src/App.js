import React from "react";
import { createContext, useState, useEffect, useContext } from "react";
import AuthContext  from "./Store/AuthContext";
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


export default function App() {
  const [Data, setData] = useState({ name: "none", skills: { name: "empty", sessionsCompleted: 0, sessionsGoal: 0 } })
  const { userID } = useContext(AuthContext)
  console.log(userID)
  const [showAddModal, setShowAddModal] = React.useState(false);
  const currentUser = "Ucep7DdGfiVrgkgtZEnuuXfKmPv1"
 

  function toggleAdding() {
    setShowAddModal((prev) => !prev);
  }
  console.log(showAddModal);

  useEffect(() => {
    fetch(`https://skill-tracker-b900e-default-rtdb.firebaseio.com/users/${currentUser}.json?print=pretty`)
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [userID]);

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
