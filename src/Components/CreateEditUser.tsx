import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../Redux/Slices/userSlice";
import styled from "styled-components";
import Input from "./UI/Input";
import Button from "./UI/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 15px;
`;
const CreateEditUser = () => {
  const { user } = useSelector(userSelector);
  const [localUser, setLocalUser] = useState({ firstName: null, lastName: null, email: null });

  useEffect(() => {
    console.log("create", user);
    setLocalUser({
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
    });
  }, [user]);

  return (
    <Container>
      <Input value={localUser.firstName ? localUser.firstName : ""} />
      <Input value={localUser.lastName ? localUser.lastName : ""} />
      <Input value={localUser.email ? localUser.email : ""} />
      <StyledButton>{user === null ? "ADD NEW USER" : "UPDATE USER"}</StyledButton>
    </Container>
  );
};

export default CreateEditUser;
