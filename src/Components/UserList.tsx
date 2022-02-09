import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UserCard, { User } from "./UserCard";
import Button from "./UI/Button";
import SearchUsers from "./SearchUsers";

import { useDispatch, useSelector } from "react-redux";
import { getUserList, userSelector } from "../Redux/Slices/userSlice";

const Container = styled.div`
  height: 100%;
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (min-width: 800px) {
    width: 800px;
  }
`;
const UserList = () => {
  const dispatch = useDispatch();
  const { userList } = useSelector(userSelector);
  const [usersSJSX, setUsersSJSX] = useState(null);

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  useEffect(() => {
    const userCards = userList.map((user: User) => {
      return <UserCard user={user} key={user.id} />;
    });
    setUsersSJSX(userCards);
  }, [userList]);

  return (
    <Container>
      <Button>ADD NEW USER</Button>
      <SearchUsers />
      {usersSJSX}
    </Container>
  );
};

export default UserList;
