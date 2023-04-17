import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Register = () => {

    const {user,createUser} = useContext(AuthContext)


  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email,password)
    .then(result => {
        console.log(result.user)
    })
    .catch(error => console.log(error.message))
    
  };

  return (
    <div className="w-96 mx-auto m-5 bg-base-200 shadow-lg rounded-lg p-5">
      <h1 className="text-2xl text-center mb-4">Register here</h1>
      <form onSubmit={handleRegister}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
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
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <label className="label">
            <Link to={"/login"} className="label-text-alt link link-hover">
              Login here
            </Link>
          </label>
    </div>
  );
};

export default Register;
