import React from "react";
import { UserContextProvider } from "./Store/UserContext";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router";
import SkillForm from "./components/SkillForm";
import Timer from "./components/Timer";
import NavBar from "./components/NavBar";
import AuthForm from "./components/Auth";

export default function App() {
  const [showAddModal, setShowAddModal] = React.useState(false);

  function toggleAdding() {
    setShowAddModal((prev) => !prev);
  }
  console.log(showAddModal);

  return (
    <UserContextProvider>
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
        <Route path="/edit/:itemID" element={<SkillForm />} />
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
    </UserContextProvider>
  );
}
