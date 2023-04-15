import React from "react";
import { useNavigate } from "react-router";
import UseInput from "./Hooks/use-input";
import AuthContext from "../Store/AuthContext";
import Button from "./UI/Button/Button";
import InputSection from "./UI/InputSection";
import loadingImg from "../images/progress.png";
import { useLocation } from "react-router-dom";

export default function AuthForm() {
  //----------------------------------------------------
  //quick fix to check if AuthForm being called from <signup> button on Hero
  //or <login> button on navbar
  //isLogin than gets set to either true or false
  //params on Links might be a better solution
  let login;
  const location = useLocation();
  location.state ? login=false : login=true;
  //----------------------------------------------------
  const [isLogin, setIsLogin] = React.useState(login);
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const authCtx = React.useContext(AuthContext);
  const navigate = useNavigate();

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    setInputValue: setEmailValue,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: emailReset,
  } = UseInput((value) => value.includes("@") && value.includes(".com"));

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    setInputValue: setPasswordValue,
    changeHandler: passwordChangeHandler,
    blurHandler: passwordBlurHandler,
    reset: passwordReset,
  } = UseInput((value) => value.trim().length > 6);

  const formValid = emailIsValid && passwordIsValid;

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  function getErrorMessage() {
    if (error.includes("EMAIL_EXISTS")) {
      return "Email is already in use.";
    } else if (error.includes("WEAK_PASSOWRD")) {
      return "Password to weak, length needs to be greater than 6.";
    } else {
      if (isLogin) {
        return "Email and password combination do not exist.";
      } else {
        return "Unable to create account at this time.";
      }
    }
  }
  const style = {
    height: emailHasError || passwordHasError ? "620px" : "560px",
  };

  function submitHandler(e) {
    e.preventDefault();
    if (!formValid) {
      return;
    }
    setError("");
    setLoading(true);

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBs2CqQXXU3zdnT0x9fFOXeGIrpELVYAc4";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBs2CqQXXU3zdnT0x9fFOXeGIrpELVYAc4";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            throw new Error(data.error.message);
          });
        }
      })
      .then((data) => {
        if(isLogin === false){
          addUserDB (addUserUrl,data.localId, emailValue)
        }
        // if (contactCtx.contactData) {
        //   fetch(
        //     `https://contactbook-759bd-default-rtdb.firebaseio.com/${data.localId}.json`,
        //     {
        //       method: "PUT",
        //       body: JSON.stringify(contactCtx.contactData),
        //     }
        //   );
        // }

        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.loginHandler(
          data.idToken,
          data.localId,
          expirationTime.toISOString()
        );
        passwordReset();
        emailReset();
        navigate("/dashboard");
      })
      .catch((err) => {
        setError(err.message);
      });
  }

  React.useEffect(() => {
    if (authCtx.email) {
      setEmailValue(authCtx.email);
      setIsLogin(false);
    }
  }, [authCtx.email, setEmailValue]);

  return (
    <section
      style={style}
      className="bg-purple-200 max-w-lg mx-auto rounded p-10 mt-20 pt-20"
    >
      <h1 className="font-bold text-2xl mb-3">
        {isLogin ? "Welcome Back" : "Sign Up"}
      </h1>
      <form onSubmit={submitHandler} className="flex flex-col">
        <div>
          <InputSection
            label="Email"
            type="email"
            changeHandler={emailChangeHandler}
            blurHandler={emailBlurHandler}
            value={emailValue}
            hasError={emailHasError}
            placeholder="What is your email address?"
            error="Please enter a valid email"
            labelClassName="text-xl"
          />
        </div>
        <div>
          <InputSection
            label="Password"
            type="password"
            changeHandler={passwordChangeHandler}
            blurHandler={passwordBlurHandler}
            value={passwordValue}
            hasError={passwordHasError}
            placeholder="What is your password?"
            error="Please enter a valid password"
            labelClassName="text-xl"
          />
        </div>
        {error && <p className={""}>{getErrorMessage()}</p>}
        {!loading ? (
          <Button className="bg-green-300/75 my-3">
            {isLogin ? "Login" : "Create Account"}
          </Button>
        ) : (
          <img src={loadingImg} alt="loading icon" />
        )}
        <button
          className={"hover:opacity-70"}
          type="button"
          color="primary"
          onClick={switchAuthModeHandler}
        >
          {isLogin ? "Create new account" : "Login with existing account"}
        </button>
      </form>
    </section>
  );
}


//this gets called when new user signs up and is adds new UID, user's email and empty skills object to user endpoint in DB
const addUserUrl =`https://skill-tracker-b900e-default-rtdb.firebaseio.com/users/.json`
function addUserDB (url,testUser, testUseremail) { 
	fetch(url, {
		method: "PATCH",
		body: JSON.stringify({
			[testUser]:{
				name:testUseremail,
				skills:{}
			}
		}),
		headers:{
			"Content-Type": "application/json",
		},
	})
};