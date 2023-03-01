import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [err, setErr] = useState(null);
  const Navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/register", inputs);
      Navigate("/login");
    } catch (error) {
      setErr(err.data);
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          required
          type="text"
          name="username"
          placeholder="Enter the username"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Enter the email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          name="password"
          placeholder="Enter the password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err}</p>}
        <span>
          Have an Account . <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
