import React, { useState, useEffect, useCallback } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  userID: "",
  email: "",
  login: (token) => {},
  logout: () => {},
});

function calculateTime(expirationTime) {
  const currentTime = new Date().getTime();
  const adjustedExpirationTime = new Date(expirationTime).getTime();
  return adjustedExpirationTime - currentTime;
}

function retrieveToken() {
  const token = localStorage.getItem("token");
  const storedExpiration = localStorage.getItem("expiration");
  const savedUserID = localStorage.getItem("userID");

  const remainingTime = calculateTime(storedExpiration);

  if (remainingTime <= 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("userID");

    return null;
  }

  return { token: token, savedUserID, duration: remainingTime };
}

let logoutTimer;

export function AuthContextProvider(props) {
  const tokenData = retrieveToken();
  let intialUser;
  let intialToken;
  if (tokenData) {
    intialToken = tokenData.token;
    intialUser = tokenData.savedUserID;
  }
  const [token, setToken] = useState(intialToken);
  const [userID, setUserID] = useState(intialUser);
  const [email, setEmail] = useState("");
  const [firstRender, setFirstRender] = useState(true);
  const isLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    console.log("logout");
    setToken(null);
    setUserID(null);
    setFirstRender(true);
    localStorage.removeItem("token");
    localStorage.removeItem("userID");
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  function loginHandler(token, userID, expirationTime) {
    console.log("Log in");
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationTime);
    localStorage.setItem("userID", userID);
    setToken(token);
    setUserID(userID);
    const remainingTime = calculateTime(expirationTime);
    logoutTimer = setTimeout(logoutHandler, remainingTime);
  }

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const contextValue = {
    token,
    isLoggedIn,
    userID,
    loginHandler,
    logout: logoutHandler,
    firstRender,
    email,
    setEmail,
    setFirstRender,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}
export default AuthContext;
