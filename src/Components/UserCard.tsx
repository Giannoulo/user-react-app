import React from "react";
import styled from "styled-components";

export interface User {
  id: number;
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
}

type Props = {
  user: User;
};

const Container = styled.div`
  height: 150px;
  width: 100%;
  margin-top: 25px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
`;

const Avatar = styled.img`
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`;
const UserCard = ({ user: { id, avatar, first_name, last_name, email } }: Props) => {
  return (
    <Container>
      <Avatar src={avatar} />
      {first_name} {last_name}
    </Container>
  );
};

export default UserCard;
