import SkillForm from "./components/SkillForm";
import React from "react";
import { Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import Timer from "./components/Timer"
import { createContext, useState, useEffect }  from "react";
import { KEY, USER1, USER2} from "./secrets"
import NavBar from "./components/NavBar";
import AuthForm from "./components/Auth";
import CreateSkillModal from "./components/Modals/CreateSkillModal";


export default function App() {  
  const [showAddModal, setShowAddModal] = React.useState(false);

  function toggleAdding() {
    setShowAddModal((prev) => !prev);
  }
  
  console.log(showAddModal);

  const currentUser = USER2;
  const [Data, setData] = useState({name:"hello", skills:{name:"test", sessionsCompleted:0, sessionsGoal:2}})
 
  useEffect(()=>{
    fetch(`https://skill-tracker-b900e-default-rtdb.firebaseio.com/users/${currentUser}.json?print=pretty`)
    .then((response) => response.json())
    .then((data) => setData(data))    
  },[]);
    
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
