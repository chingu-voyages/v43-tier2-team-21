import { createContext, useContext, useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

const UserContext = createContext({ 
	name: "none", 
	skills: { 
		name: "empty", 
		sessionsCompleted: 0, 
		sessionsGoal: 0 
	} 
});

export function UserContextProvider(){
	const { userID, isLoggedIn } = useContext(AuthContext)
	console.log(userID);
	console.log(isLoggedIn);
	const currentUser = "Ucep7DdGfiVrgkgtZEnuuXfKmPv1";
	const [contextValue, setContextValue ] = useState(UserContext)
	
	useEffect(() => {
		fetch(`https://skill-tracker-b900e-default-rtdb.firebaseio.com/users/${currentUser}.json?print=pretty`)
		  .then((response) => response.json())
		  .then((data) => setContextValue(data))
	  }, []);

	return(
		<UserContext.Provider value={contextValue}>

		</UserContext.Provider>
	)
}