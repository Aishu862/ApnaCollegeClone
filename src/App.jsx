// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage from './component/HomePage';
import SignupForm from './component/SignupForm';
import LoginModal from './component/LoginModal';
import ForgotPasswordModal from './component/ForgotPasswordModal';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginModal />} />
          <Route path="/forgotpassword" element={<ForgotPasswordModal/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

