import { createContext, useContext, useState, useEffect } from "react";
import AuthContext from "./AuthContext";

export const UserContext = createContext(null);

export function UserContextProvider(props) {
  const { userID, isLoggedIn, firstRender, setFirstRender } =
    useContext(AuthContext);
  const [user, setUser] = useState("");
  const [skills, setSkills] = useState([]);

  const addSkill = (obj) => {
    setSkills((prev) => [...prev, obj]);
  };

  useEffect(() => {
    if (!isLoggedIn) {
      setUser("");
      setSkills([]);
    }
    if (!firstRender || !userID) return;
    setFirstRender(false);
    fetch(
      `https://skill-tracker-b900e-default-rtdb.firebaseio.com/users/${userID}.json?print=pretty`
    ).then((response) => {
      response.json().then((data) => {
        if (data === null) {
          console.log(`data is null: NEW USER not yet written to DB`);
        } else {
          setUser(data.name);
          for (let skill in data.skills) {
            addSkill(data.skills[skill]);
          }
        }
      });
    });
  }, [isLoggedIn, userID, firstRender, setFirstRender]);

  useEffect(() => {
    if (firstRender || !userID || !user) {
      return;
    }
    console.log("running");
    fetch(
      `https://skill-tracker-b900e-default-rtdb.firebaseio.com/users/${userID}.json?print=pretty`,
      {
        method: "PUT",
        body: JSON.stringify({
          name: user,
          skills: skills,
        }),
      }
    );
  }, [skills, user, userID, firstRender]);

  const value = {
    addSkill,
    skills,
    user,
  };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
}
