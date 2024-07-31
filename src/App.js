import logo from './logo.svg';
import './App.css';
import './components/SigninPanel'
import SigninPanel from './components/SigninPanel';
import HomePage from './components/HomePage';
import SignupPanel from './components/SignupPanel';

import React, { useState } from 'react';


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
    <div>
      <HomePage openSigninModal={openSigninModal} openSignupModal={openSignupModal}/>
      {isSigninModalOpen && <SigninPanel closeSigninModal={closeSigninModal}/>}
      {isSignupModalOpen && <SignupPanel closeSignupModal={closeSignupModal}/>}
    </div>
      
    </>
  );
}

export default App;
