import React from "react";
import { securitySelector } from "./Redux/Slices/securitySlice";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Login from "./Components/Login";
import UserList from "./Components/UserList";
import Header from "./Components/Header";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
function App() {
  const { token } = useSelector(securitySelector);

  return (
    <Container>
      {token ? (
        <>
          <Header />
          <UserList />
        </>
      ) : (
        <Login />
      )}
    </Container>
  );
}

export default App;
