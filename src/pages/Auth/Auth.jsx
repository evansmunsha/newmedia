import React from "react";
import "./auth.css";
import Logo from "../../img/logo.png";
import { useState } from "react";
const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="auth">
      <img src={Logo} alt="" />
      <div className="webname">
        <h1>{isSignUp ? "MHA 's Media" : "Welcome to evansbook media!"}</h1>

        <h6>"Explore what's happening throughout the world!"</h6>
      </div>

      <div className="a-right">
        <form action="" className="infoform authForm">
          <h3>{isSignUp ? "Sign Up" : "Sign In"}</h3>

          {isSignUp && (
            <div>
              <input type="text" placeholder="First Name" className="infoinput" name="firstname" />

              <input type="text" placeholder="Last Name" className="infoinput" name="lastname" />
            </div>
          )}

          <div>
            <input type="email" className="infoinput" name="username" placeholder="Username" />
          </div>

          <div>
            <input
              type="password"
              name="password"
              id=""
              className="infoinput"
              placeholder="Password"
            />
            {isSignUp && (
              <input
                type="password"
                name="confirmpass"
                id=""
                className="infoinput"
                placeholder="Confirm Password"
              />
            )}
          </div>
          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer", color: "blue" }}
              onClick={() => setIsSignUp((prev) => !prev)}>
              {isSignUp ? "Have an account? Sign In!" : "Don't have an account? Sign Up"}
            </span>

            <button className="button infoButton" type="submit">
              {isSignUp ? "SignUp" : "Sign In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
