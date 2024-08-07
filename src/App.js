import logo from './logo.svg';
import './App.css';
import './components/SigninPanel'
import SigninPanel from './components/SigninPanel';
import HomePage from './components/HomePage';
import SignupPanel from './components/SignupPanel';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React, { useState } from 'react';
import UserLanding from './components/landingPage/UserLanding';
import UserProfile from './components/landingPage/usercomponent/UserProfile';
import AdminLanding from './components/landingPage/AdminLanding';
import Examform from './components/landingPage/usercomponent/Examform';
import UserProfileUpdate from './components/landingPage/UserProfileUpdate';
import AdminDashboard from './components/landingPage/admincomponent/AdminDashboard';

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

        <Route element={<UserLanding />}>
          {/* user landing page */}
          <Route path="/user/landing" element={<UserProfile />}/>
          <Route path="/user/examform" element={<Examform />}/>
          {/* update profile form */}
          <Route path="/user/profile/update" element={<UserProfileUpdate />}/> 
        </Route>


        <Route element={<AdminLanding />}>
        <Route path="/admin/landing" element={<AdminDashboard/ >}/>
        <Route path="/admin/profile" element={<UserProfile />} />
        <Route path="/admin/profile/update" element={<UserProfileUpdate />}/> 
        </Route>

      </Routes>
    </Router>
   
      
    </>
  );
}

export default App;
