// pages/AuthPage.js
import React from 'react';
import { Route, Switch , Routes} from 'react-router-dom';
import SignIn from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';
import ForgotPassword from '../components/auth/ForgotPassword';

const AuthPage = () => {
  return (
    <Routes>
      <Route path="*" element={<SignIn/>} />
      <Route path="/auth/sign-up" element={<SignUp/>} />
      <Route path="/auth/forgot-password" element={ForgotPassword} />
    </Routes>
  );
};

export default AuthPage;
