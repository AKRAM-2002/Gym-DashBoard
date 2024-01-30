// components/auth/SignIn.js
import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';

const SignIn = () => {
  return (
    <Container>
      <AuthContainer>
        <Title>Gym Dashboard</Title>
        <Subtitle>
          <a href="#">start your 14-day free trial</a>
        </Subtitle>
        <Form>
          <InputLabel>Email address</InputLabel>
          <StyledInput
            autoComplete="email"
            placeholder="Email"
            required
            type="email"
          />
          <InputLabel>Password</InputLabel>
          <StyledInput
            autoComplete="current-password"
            placeholder="Password"
            required
            type="password"
          />
          <RememberForgotContainer>
            <RememberMeContainer>
              <StyledCheckbox id="remember-me" />
              <RememberLabel htmlFor="remember-me">Remember me</RememberLabel>
            </RememberMeContainer>
            <ForgotPasswordLink href="#">Forgot your password?</ForgotPasswordLink>
          </RememberForgotContainer>
          <SignInButton type="submit">Sign in</SignInButton>
        </Form>
        <OrSeparator>
          <OrLine />
          <OrText>Or continue with</OrText>
        </OrSeparator>
        <SocialButtonsContainer>
          <SocialButton>
            <FaFacebook/>
          </SocialButton>
          <SocialButton>
            <FaGoogle/>
          </SocialButton>
          <SocialButton>
          <FaGithub />
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
`;

const AuthContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #2d3748;
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

const Form = styled.form`
  margin-top: 1.5rem;
  display: grid;
  gap: 1rem;
`;

const InputLabel = styled.label`
  font-size: 0.875rem;
  color: #4a5568;
`;

const RememberForgotContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RememberMeContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RememberLabel = styled.label`
  font-size: 0.875rem;
  color: #4a5568;
  margin-left: 0.25rem;
`;

const ForgotPasswordLink = styled.a`
  font-size: 0.875rem;
  color: var(--secondary-color);
  text-decoration: none;
`;

const SignInButton = styled.button`
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

const StyledInput = styled.input`
  padding: 0.75rem;
  border: 1px solid #cbd5e0;
  border-radius: 0.25rem;
`;

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 0.25rem;
`;

const OrSeparator = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
`;

const OrLine = styled.div`
  flex-grow: 1;
  height: 1px;
  background-color: #cbd5e0;
`;

const OrText = styled.div`
  margin: 0 1rem;
  font-size: 0.875rem;
  color: #4a5568;
`;

const SocialButtonsContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
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


export default SignIn;
