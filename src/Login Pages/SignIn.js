import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="login template my-4  d-flex justify-content-center align-items-center">
      <div className=" w-25 p-3 bg-dark rounded-4">
        <form>
          <h3 className="text-center mb-3 text-light">Sign In</h3>
          <div className="mb-4 text-light">
            <label htmlFor="email" className="mb-2 ">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your Email"
              className="form-control"
            />
          </div>
          <div className="mb-4 text-light">
            <label htmlFor="password" className="mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your Password"
              className="form-control"
            />
          </div>
          <div className="pt-3 d-grid">
            <button className="btn btn-primary">Sign In </button>
          </div>
          <p className="text-light   mt-2">
            <Link className="px-2 text-decoration-none" to="/signup">
              Forgot Password
            </Link>
            <Link className="px-2 " to="/signup">
              Create an Account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default SignIn;
