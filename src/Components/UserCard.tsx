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
  border: 2px solid rgb(116, 116, 116);
  border-radius: 10px;
  display: flex;
`;

const Avatar = styled.img`
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`;

const Details = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  & span {
    &:first-of-type {
      font-weight: 600;
      margin-bottom: 10px;
    }
    color: #242424;
  }
`;
const UserCard = ({ user: { id, avatar, first_name, last_name, email } }: Props) => {
  return (
    <Container>
      <Avatar src={avatar} />
      <Details>
        <span>
          {first_name} {last_name}
        </span>
        <span>{email}</span>
      </Details>
    </Container>
  );
};

export default UserCard;
