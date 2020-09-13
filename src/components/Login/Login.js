import React, { useState } from "react";
import "./Login.css";
import Logo from "../../assets/images/logo.png";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../common/firebase";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => (auth ? history.push("/") : null))
      .catch((err) => alert(err.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => (auth ? history.push("/") : null))
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__logoContainer">
          <Link to="/" className="login__logoAndText">
            <img className="login__logo" src={Logo} alt="" />
            <p className="login__text">
              New Modern Machine <br />
              Store
            </p>
          </Link>
        </div>
        <div className="login__loginContainer">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__signinButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
          <p>* Terms and Condition Applied</p>
          <button className="login__registerButton" onClick={register}>
            Create your Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
