import React from "react";
import "./css/Login.css";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {

  const navigate = useNavigate()

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-12 d-flex justify-content-center">
            <div className="card">
              <h5 className="card-header">Login</h5>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      {/* We'll never share your email with anyone else. */}
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <div className="col-md-12 d-flex justify-content-center mt-3">
                    <button type="button" className="btn btn-primary" onClick={()=>{navigate('/')}}>
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
