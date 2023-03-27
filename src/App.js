import SkillForm from "./components/SkillForm";
import { Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";

export default function App() {
  return (
    <Routes>
      <Route path="/landingpage" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/addskill" element={<SkillForm />} />
      <Route path="*" element={<Dashboard />} />
    </Routes>
  );
}
