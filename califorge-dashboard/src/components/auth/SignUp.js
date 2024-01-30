// components/auth/SignUp.js
import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <Container>
      <AuthContainer>
        <Title>Create an Account</Title>
        <Form>
          <InputLabel>Full Name</InputLabel>
          <StyledInput autoComplete="name" placeholder="Full Name" required />
          <InputLabel>Email address</InputLabel>
          <StyledInput autoComplete="email" placeholder="Email" required type="email" />
          <InputLabel>Password</InputLabel>
          <StyledInput
            autoComplete="new-password"
            placeholder="Password"
            required
            type="password"
          />
          <Subtitle>
            <Link to="*">Already have an account? Sign in here</Link>
          
        </Subtitle>

          <SignUpButton type="submit">Sign up</SignUpButton>
        </Form>
        
        <OrSeparator>
          <OrLine />
          <OrText>Or sign up with</OrText>
        </OrSeparator>
        <SocialButtonsContainer>
          <SocialButton>
            <FaFacebook />
            
          </SocialButton>
          <SocialButton>
            <FaGoogle />
          </SocialButton>
        </SocialButtonsContainer>
      </AuthContainer>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  background-color: #edf2f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AuthContainer = styled.div`
  min-width: 400px;
  margin: 0 auto;
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 0.875rem;
  color: #4a5568;

  a {
    color: var(--secondary-color);
    font-weight: medium;
    margin-left: 0.25rem;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #2d3748;
  margin-bottom: 1rem;
`;


const SignInLink = styled.a`
  color: var(--secondary-color);
  font-weight: medium;
  margin-left: 0.25rem;
  text-decoration: none;
`;

const Form = styled.form`
  margin-top: 1.5rem;
  display: grid;
  gap: 1rem;
`;

const InputLabel = styled.label`
  font-size: 0.875rem;
  color: #4a5568;
`;

const StyledInput = styled.input`
  padding: 0.75rem;
  border: 1px solid #cbd5e0;
  border-radius: 0.25rem;
`;

const SignUpButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #4299e1;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
`;

const OrSeparator = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 1rem 0;
`;

const OrLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #cbd5e0;
`;

const OrText = styled.div`
  margin: 0.5rem 0;
  font-size: 0.875rem;
  color: #4a5568;
`;

const SocialButtonsContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
`;

const SocialButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4a5568;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
`;

const SocialButtonText = styled.span`
  margin-left: 0.5rem;
`;

export default SignUp;
