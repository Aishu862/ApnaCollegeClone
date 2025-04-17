import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ForgotPasswordModal from "./ForgotPasswordModal";
import "./LoginModal.css";

const LoginModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showForgotModal, setShowForgotModal] = useState(false);

  const navigate = useNavigate(); // hook for navigation


  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  const handleForgotSubmit = (email) => {
    alert(`Reset link sent to: ${email}`);
    setShowForgotModal(false);
  };

  const handleClose = () => {
    navigate("/"); // redirect to home
  };

  return (
    <div className="login-modal">
      <div className="modal-content">
        {/* Close Button (×) */}
        <button className="close-button" onClick={handleClose}>×</button>

        <h2>LOGIN OR SIGN UP TO START LEARNING</h2>
        <form onSubmit={handleLogin}>
          <label>
            What's your e-mail?
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Your password?
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Login</button>
        </form>
        <div className="links">
          <Link to="/signup" className="text-blue-400">Create Account</Link>
          <a href="#" className="text-blue-400" onClick={() => setShowForgotModal(true)}>Forgot your password?</a>
        </div>
      </div>

      {showForgotModal && (
        <ForgotPasswordModal
          onClose={() => setShowForgotModal(false)}
          onSubmit={handleForgotSubmit}
        />
      )}
    </div>
  );
};

export default LoginModal;
