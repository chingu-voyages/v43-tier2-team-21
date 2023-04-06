import { createContext, useContext, useState, useEffect } from "react";
import AuthContext  from "./AuthContext";

export const UserContext = createContext(null);

export function UserContextProvider(props){
	const { userID, isLoggedIn } = useContext(AuthContext)
	console.log(userID);
	console.log(isLoggedIn);
	const [ contextValue, setContextValue ] = useState({ 
		name: "none", 
		skills:{
			skill1:{ 
				name: "empty", 
				sessionsCompleted: 0, 
				sessionsGoal: 0 
			}, 
		} 
	})
	
	useEffect(() => {
		if(isLoggedIn){
			fetch(`https://skill-tracker-b900e-default-rtdb.firebaseio.com/users/${userID}.json?print=pretty`)
			  .then((response) => response.json())
			  .then((data) => setContextValue(data))
		}
	  }, [userID]);

	return(
		<UserContext.Provider value={contextValue}>
			{props.children}
		</UserContext.Provider>
	)
}