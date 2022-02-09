import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { userLogin } from "../Redux/Slices/securitySlice";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Login = () => {
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
      <form onSubmit={handleSubmit}>
        <input type="text" value={credentials.email} onChange={handleChange} name="email" />
        <input type="text" value={credentials.password} onChange={handleChange} name="password" />
        <input type="submit" />
      </form>
    </Container>
  );
};

export default Login;
