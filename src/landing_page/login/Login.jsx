import React, { useState } from "react";
import axios from "axios"; // For sending requests to the backend
import { Link } from "react-router-dom";

function Login() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // State to manage form submission feedback
  const [feedback, setFeedback] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form action
    try {
      const response = await axios.post("http://localhost:3002/login", formData);
      console.log(response);
      setFeedback(response.data.message); // Display success message
      setFormData({ email: "", password: "" }); // Reset form
    } catch (error) {
      setFeedback(
        error.response?.data?.msg || "Login failed. Please try again."
      );
    }
  };

  return (
    <div className="row mt-3">
      <h2 className="col-6 offset-3">Login</h2>
      <div className="col-6 offset-3">
        <form onSubmit={handleSubmit} noValidate className="needs-validation">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              required
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              required
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button className="btn btn-success" type="submit">Login</button>
          <br /><br />
          <span>
            Don't have an account? &nbsp; <Link to={"/signup"} style={{ color: "blue" }}>SignUp</Link>
          </span>
        </form>

        {/* Display feedback */}
        {feedback && <p className="mt-3">{feedback}</p>}
      </div>
    </div>
  );
}

export default Login;
