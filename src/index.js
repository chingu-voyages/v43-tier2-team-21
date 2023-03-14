import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "normalize.css";
import "./index.css";

// Firebase api reference url : https://skill-tracker-e115a-default-rtdb.firebaseio.com/
// Firebase Realtime DB docs : https://firebase.google.com/docs/database?authuser=0&hl=en
// react-timer-hook Docs:  https://www.npmjs.com/package/react-timer-hook

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
