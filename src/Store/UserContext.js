import { createContext, useContext, useState, useEffect } from "react";
import AuthContext  from "./AuthContext";

export const UserContext = createContext(null);

export function UserContextProvider(props){
	const { userID, isLoggedIn } = useContext(AuthContext)
	const [ contextValue, setContextValue ] = useState({name:"loggedOut"})
	
	useEffect(() => {
		if(isLoggedIn){
			fetch(`https://skill-tracker-b900e-default-rtdb.firebaseio.com/users/${userID}.json?print=pretty`)
			  .then((response) => {
					response.json()
					.then((data) => {
						data === null ? console.log(`data is null: NEW USER not yet written to DB`) : setContextValue(data)
					})
				})
		}else{
			setContextValue({name:"loggedOut"})
		}
	},[isLoggedIn]);

	return(
		<UserContext.Provider value={contextValue}>
			{props.children}
		</UserContext.Provider>
	)
}