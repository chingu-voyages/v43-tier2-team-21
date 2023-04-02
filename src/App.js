import SkillForm from "./components/SkillForm";
import { Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import Timer from "./components/Timer"
import { createContext, useState, useEffect }  from "react";



export const UserContext = createContext(null)

export default function App() {  
  const currentUser = "OXEeBhhuvdMr0a4dIbAevf82O9H2";
  const [Data, setData] = useState({name:"hello", skills:{name:"test", sessionsCompleted:0, sessionsGoal:2}})
 
  useEffect(()=>{
    fetch(`https://skill-tracker-b900e-default-rtdb.firebaseio.com/users/${currentUser}.json?print=pretty`)
    .then((response) => response.json())
    .then((data) => setData(data))    
  },[]);
  
  return (
    <UserContext.Provider value={Data}>
      <Routes>
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addskill" element={<SkillForm />} />
        <Route path="/edit" element={<SkillForm />}/>
        <Route path="/timer" element={<Timer />}/>
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </UserContext.Provider>
  );
}
