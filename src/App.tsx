import React, {useEffect} from "react";
import {login, securitySelector} from "./Redux/Slices/securitySlice";
import {useSelector, useDispatch} from "react-redux";
import styled from "styled-components";

import Login from "./Components/Login";
import Header from "./Components/Header";
import ExposedRoutes from "./ExposedRoutes";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
function App() {
  const dispatch = useDispatch();
  const {token} = useSelector(securitySelector);

  // Check if the user is already logged in and update the redux store on page reload
  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      dispatch(login(localToken));
    }
  }, [dispatch]);

  return (
    <Container>
      {token ? (
        <>
          <Header />
          <ExposedRoutes />
        </>
      ) : (
        <Login />
      )}
    </Container>
  );
}

export default App;
