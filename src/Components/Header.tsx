import React from "react";
import styled from "styled-components";
import Button from "./UI/Button";

import { userLogout } from "../Redux/Slices/securitySlice";
import { useDispatch } from "react-redux";

const Container = styled.div`
  height: 100px;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Header = () => {
  const dispatch = useDispatch();
  const handleLogoutClick = () => {
    dispatch(userLogout());
  };

  return (
    <Container>
      <Button onClick={handleLogoutClick}>LOGOUT</Button>
    </Container>
  );
};

export default Header;
