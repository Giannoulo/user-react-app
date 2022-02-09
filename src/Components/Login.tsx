import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { userLogin } from "../Redux/Slices/securitySlice";
import Input from "./UI/Input";
import Button from "./UI/Button";

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LoginButton = styled(Button)`
  margin-top: 30px;
  width: 100%;
`;
const Login = () => {
  // TODO Add validation, disable button if no email or password are present
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(userLogin(credentials.email, credentials.password));
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={credentials.email}
          onChange={handleChange}
          name="email"
          placeholder="email"
        />
        <Input
          type="text"
          value={credentials.password}
          onChange={handleChange}
          name="password"
          placeholder="password"
        />
        <LoginButton type="submit">LOGIN</LoginButton>
      </Form>
    </Container>
  );
};

export default Login;
