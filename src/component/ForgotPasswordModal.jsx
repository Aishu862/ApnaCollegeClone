import React, { useState } from 'react';

const ForgotPasswordModal = ({ onClose, onSubmit }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(email); // Call the parent function if provided
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-60 z-50">
      <div className="bg-black text-white p-6 rounded-lg w-full max-w-md relative shadow-lg">
        <button
          className="absolute top-2 right-2 text-white text-xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-lg font-bold mb-4">GET A BRAND NEW PASSWORD!</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">What's your e-mail?</label>
          <input
            type="email"
            className="w-full p-2 rounded bg-gray-800 text-white mb-6"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="flex justify-center gap-4">
            <button
              type="submit"
              className="bg-indigo-500 text-white px-6 py-2 rounded"
            >
              OK
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-indigo-400 text-white px-6 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;

