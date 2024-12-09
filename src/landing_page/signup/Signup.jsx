import React, { useState } from "react";
import axios from "axios"; // For sending requests to the backend

import { Link } from "react-router-dom";

function Signup() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    username: "",
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
      const response = await axios.post("https://zerodha-backend-9wxm.onrender.com/signup", formData);
      setFeedback(response.data.message);
      setFormData({ username: "", email: "", password: "" }); // Reset form
    } catch (error) {
      setFeedback(
        error.response?.data?.msg || "Signup failed. Please try again."
      );
    }
  };

  return (
    <div className="row mt-3">
      <h2 className="col-6 offset-3">SignUp</h2>
      <div className="col-6 offset-3">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="needs-validation"
        >
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              required
              id="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

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

          <button className="btn btn-success" type="submit">SignUp</button>
          <br /><br />
          <span>
            Already have an account? &nbsp; <Link to={"/login"} style={{color:"blue"}}>Login</Link>
          </span>
        </form>

        {/* Display feedback */}
        {feedback && <p className="mt-3">{feedback}</p>}
      </div>
    </div>
  );
}

export default Signup;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";

// const Signup = () => {
//   const navigate = useNavigate();
//   const [inputValue, setInputValue] = useState({
//     email: "",
//     password: "",
//     username: "",
//   });
//   const { email, password, username } = inputValue;
//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setInputValue({
//       ...inputValue,
//       [name]: value,
//     });
//   };

//   const handleError = (err) =>
//     toast.error(err, {
//       position: "bottom-left",
//     });
//   const handleSuccess = (msg) =>
//     toast.success(msg, {
//       position: "bottom-right",
//     });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(
//         "http://localhost:4000/signup",
//         {
//           ...inputValue,
//         },
//         { withCredentials: true }
//       );
//       const { success, message } = data;
//       if (success) {
//         handleSuccess(message);
//         setTimeout(() => {
//           navigate("/");
//         }, 1000);
//       } else {
//         handleError(message);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//     setInputValue({
//       ...inputValue,
//       email: "",
//       password: "",
//       username: "",
//     });
//   };

//   return (
//     <div className="form_container">
//       <h2>Signup Account</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={email}
//             placeholder="Enter your email"
//             onChange={handleOnChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Username</label>
//           <input
//             type="text"
//             name="username"
//             value={username}
//             placeholder="Enter your username"
//             onChange={handleOnChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={password}
//             placeholder="Enter your password"
//             onChange={handleOnChange}
//           />
//         </div>
//         <button type="submit">Submit</button>
//         <span>
//           Already have an account? <Link to={"/login"}>Login</Link>
//         </span>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Signup;