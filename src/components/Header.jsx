import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-300">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        <Link className="mx-4" to={"/"}>Home</Link>
        <Link className="mx-4" to={"/login"}>Login</Link>
        <Link className="mx-4" to={"/register"}>Register</Link>
      </div>
    </div>
  );
};

export default Header;
