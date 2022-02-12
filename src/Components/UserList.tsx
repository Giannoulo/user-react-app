import React, {useEffect, useState, useRef} from "react";
import styled from "styled-components";
import UserCard, {User} from "./UserCard";
import Button from "./UI/Button";
import SearchUsers from "./SearchUsers";

import {useDispatch, useSelector} from "react-redux";
import {getUserList, userSelector} from "../Redux/Slices/userSlice";
import {Link} from "react-router-dom";

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
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const TargetDiv = styled.div`
  min-height: 30px;
`;
const UserList = () => {
  const targetDivRef = useRef<HTMLDivElement | null>(null);
  const [intersections, setIntersections] = useState<number>(1);

  const dispatch = useDispatch();
  const {userList} = useSelector(userSelector);
  const [usersJSX, setUsersJSX] = useState<JSX.Element[]>([]);

  const [searchTerm, setSearchTerm] = useState("");

  // Get more pages on each intersection
  useEffect(() => {
    dispatch(getUserList(intersections));
  }, [dispatch, intersections]);

  // Keep the rendered cards updated
  useEffect(() => {
    const userCards: JSX.Element[] = [];
    for (let i = 0; i < userList.length; i++) {
      // Filter results
      if (searchTerm.length === 0) {
        userCards.push(<UserCard user={userList[i]} key={userList[i].id} />);
      } else {
        if (
          userList[i].first_name.includes(searchTerm) ||
          userList[i].last_name.includes(searchTerm) ||
          userList[i].email.includes(searchTerm)
        ) {
          userCards.push(<UserCard user={userList[i]} key={userList[i].id} />);
        }
      }
    }
    setUsersJSX(userCards);
  }, [userList, searchTerm]);

  // Add an intersection observer to target-div on mount
  useEffect(() => {
    if (targetDivRef.current) {
      const target: HTMLDivElement = targetDivRef.current; // Keep the ref in the useffect block so proper cleanup can be performed
      const options = {
        root: null,
        threshold: 0,
      };
      const handleIntersect = (entries: any) => {
        console.log(entries);
        if (entries[0].isIntersecting) {
          setIntersections((prevIntersections) => prevIntersections + 1);
        }
      };
      const observer: IntersectionObserver = new IntersectionObserver(handleIntersect, options);
      observer.observe(target);
      return () => {
        observer.unobserve(target);
      };
    }
  }, []);
  return (
    <Container>
      <StyledLink to="/user">
        <Button>ADD NEW USER</Button>
      </StyledLink>
      <SearchUsers setSearchTerm={setSearchTerm} />
      {usersJSX}
      <TargetDiv ref={targetDivRef} key="target-div" />
    </Container>
  );
};

export default UserList;
