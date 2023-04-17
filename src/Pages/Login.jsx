import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import { FacebookAuthProvider } from "firebase/auth";

const Login = () => {

const {user,signIn,providerLogin} = useContext(AuthContext)

  const handleLogin = (event) => {
    event.preventDefault();
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
    .then(result => console.log(result.user))
    .catch(error => console.log(error.message))
  };

  const handleFacebookLogin = () => {
    const provider = new FacebookAuthProvider();
    providerLogin(provider)
    .then(result => console.log(result))
    .catch(err => err.message)
  }

  return (
    <div className="w-96 mx-auto m-5 bg-base-200 shadow-lg rounded-lg p-5">
      <h1 className="text-2xl text-center mb-4">Login here</h1>

      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="text"
            placeholder="email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="input input-bordered"
          />
          <label className="label">
            <a className="label-text-alt link link-hover">forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <label className="label">
        <Link to={"/register"} className="label-text-alt link link-hover">
          Register here
        </Link>
      </label>
      <div onClick={handleFacebookLogin} className="btn">Facebook Login</div>
    </div>
  );
};

export default Login;
