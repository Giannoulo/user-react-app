import React from "react";
import styled from "styled-components";
import Button from "./UI/Button";

import { userLogout } from "../Redux/Slices/securitySlice";
import { useDispatch } from "react-redux";
import { useLocation, Link } from "react-router-dom";

const Container = styled.div<{ backButton: boolean }>`
  height: 100px;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: ${(props) => (props.backButton ? "space-between" : "flex-end")};
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const handleLogoutClick = () => {
    dispatch(userLogout());
  };

  return (
    <Container backButton={location.pathname === "/user" ? true : false}>
      {location.pathname === "/user" && (
        <StyledLink to="/">
          <Button>BACK</Button>
        </StyledLink>
      )}
      <Button onClick={handleLogoutClick}>LOGOUT</Button>
    </Container>
  );
};

export default Header;
