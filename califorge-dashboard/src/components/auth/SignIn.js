// components/auth/SignIn.js
import React from 'react';
import styled from 'styled-components';

const SignIn = () => {
  return (
    <Container>
      <Form>
        <Label>Email:</Label>
        <Input type="email" />
        <Label>Password:</Label>
        <Input type="password" />
        <Button type="submit">Sign In</Button>
      </Form>
      <Link to="/forgot-password">Forgot Password?</Link>
    </Container>
  );
};

const Container = styled.div`
  /* Add styles for the overall container */
`;

const Form = styled.form`
  /* Add styles for the form */
`;

const Label = styled.label`
  /* Add styles for form labels */
`;

const Input = styled.input`
  /* Add styles for form inputs */
`;

const Button = styled.button`
  /* Add styles for the submit button */
`;

const Link = styled.a`
  /* Add styles for links */
`;

export default SignIn;
