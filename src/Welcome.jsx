import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="text-center p-5 bg-light shadow rounded">
        <h1 className="display-4 fw-semibold text-primary mb-4">Welcome</h1>
        <p className="lead text-muted">Ready to place an order? Click below!</p>
        <Link to="/user" className="btn btn-primary btn-lg mt-3">
          Let's Create Order
        </Link>
      </div>
    </div>
  );
}
