import React, {useEffect, useState, useRef} from "react";
import styled from "styled-components";
import UserCard, {User} from "./UserCard";
import Button from "./UI/Button";
import SearchUsers from "./SearchUsers";

import {useDispatch, useSelector} from "react-redux";
import {getUserList, userSelector} from "../Redux/Slices/userSlice";

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

const TargetDiv = styled.div`
  min-height: 30px;
`;
const UserList = () => {
  const targetDivRef = useRef<HTMLDivElement | null>(null);
  const [intersections, setIntersections] = useState<number>(1);

  const dispatch = useDispatch();
  const {userList} = useSelector(userSelector);
  const [usersSJSX, setUsersSJSX] = useState(null);

  // Get more pages on each intersection
  useEffect(() => {
    dispatch(getUserList(intersections));
  }, [dispatch, intersections]);

  // Keep the rendered cards updated
  useEffect(() => {
    const userCards = userList.map((user: User) => {
      return <UserCard user={user} key={user.id} />;
    });
    setUsersSJSX(userCards);
  }, [userList]);

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
      <Button>ADD NEW USER</Button>
      <SearchUsers />
      {usersSJSX}
      <TargetDiv ref={targetDivRef} key="target-div" />
    </Container>
  );
};

export default UserList;
