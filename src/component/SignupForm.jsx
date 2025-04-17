import React, { useState } from 'react';
import ForgotPasswordModal from "./ForgotPasswordModal";
import { Link } from 'react-router-dom';

const SignupForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  });

  const [showForgotModal, setShowForgotModal] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();
      console.log("Server Response:", result);
    } catch (error) {
      console.error("Error connecting to backend:", error);
    }
  };

  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center bg-lightblack bg-opacity-50 z-50">
        <div className="relative bg-black text-white p-8 rounded-lg w-full max-w-md">
          <button
            className="absolute top-4 right-4 text-white text-2xl focus:outline-none hover:scale-110 transition-transform"
            onClick={() => window.history.back()}
          >
            &times;
          </button>

          <h2 className="text-xl font-bold mb-6 text-center">SIGN UP TO APNA COLLEGE!</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label>What's your name?</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-2 rounded bg-white text-black"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label>What's your e-mail?</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-800 text-white"
                placeholder="E-mail"
                required
              />
            </div>
            <div>
              <label>Your password?</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full p-2 rounded bg-white text-black"
                placeholder="Password"
                required
              />
            </div>
            <div>
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-800 text-white"
                placeholder="98xxxxxxxx"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 rounded font-semibold mt-4"
            >
              Start your learning journey
            </button>
          </form>

          <div className="text-sm mt-4 text-center">
            <Link to="/login" className="text-blue-400">Sign in with your account</Link> |
            <a
              href="#"
              className="text-blue-400 ml-2"
              onClick={(e) => {
                e.preventDefault();
                setShowForgotModal(true);
              }}
            >
              Forgot your password?
            </a>
          </div>
        </div>
      </div>

      {/* Show forgot password modal if triggered */}
      {showForgotModal && (
        <ForgotPasswordModal
          onClose={() => setShowForgotModal(false)}
          onSubmit={(email) => {
            alert(`Reset link sent to: ${email}`);
            setShowForgotModal(false);
          }}
        />
      )}
    </>
  );
};

export default SignupForm;
