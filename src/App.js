import logo from './logo.svg';
import './App.css';
import './components/SigninPanel'
import SigninPanel from './components/SigninPanel';
import HomePage from './components/HomePage';
import SignupPanel from './components/SignupPanel';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React, { useState } from 'react';
import UserLanding from './components/landingPage/UserLanding';
import AdminLanding from './components/landingPage/AdminLanding';


function App() {
  const [isSigninModalOpen, setIsSigninModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const openSigninModal = () => {
    setIsSigninModalOpen(true);
};

const closeSigninModal = () => {
  setIsSigninModalOpen(false);
};

const openSignupModal = () => {
  setIsSignupModalOpen(true);
};

const closeSignupModal = () => {
  setIsSignupModalOpen(false);
};

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={
           <div>
           <HomePage openSigninModal={openSigninModal} openSignupModal={openSignupModal}/>
           {isSigninModalOpen && <SigninPanel closeSigninModal={closeSigninModal}/>}
           {isSignupModalOpen && <SignupPanel closeSignupModal={closeSignupModal}/>}
         </div>
        } />
        <Route path="/user/landing" element={<UserLanding />}/>
        <Route path="/admin/landing" element={<AdminLanding />}/>
      </Routes>
    </Router>
   
      
    </>
  );
}

export default App;
