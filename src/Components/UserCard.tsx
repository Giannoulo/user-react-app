import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {setUser} from "../Redux/Slices/userSlice";
import {useDispatch} from "react-redux";

export interface User {
  id: number;
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
}

const StyledLink = styled(Link)`
  height: 150px;
  width: 100%;
  margin-top: 25px;
  border: 2px solid rgb(116, 116, 116);
  border-radius: 10px;
  display: flex;
  text-decoration: none;
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
const UserCard = ({user}: {user: User}) => {
  const dispatch = useDispatch();
  const handleUserClick = (user: User) => {
    dispatch(setUser(user));
  };
  return (
    <StyledLink to="/user" onClick={() => handleUserClick(user)}>
      <Avatar src={user.avatar} />
      <Details>
        <span>
          {user.first_name} {user.last_name}
        </span>
        <span>{user.email}</span>
      </Details>
    </StyledLink>
  );
};

export default UserCard;
