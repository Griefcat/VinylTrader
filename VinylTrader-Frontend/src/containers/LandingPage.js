import React from 'react';
import LoginButton from '../components/LoginButton'
import NewUserButton from '../components/NewUserButton'

export default function LandingPage() {
  

  return (
    <div>
        <NewUserButton color="inherit">Create New User</NewUserButton>
        <LoginButton color="inherit">Login</LoginButton>
        <h1>landing page</h1>
    </div>
  );
}
