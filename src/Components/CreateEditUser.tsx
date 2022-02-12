import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {userSelector, setUser} from "../Redux/Slices/userSlice";
import styled from "styled-components";
import Input from "./UI/Input";
import Button from "./UI/Button";
import {createUser, editUser} from "../Redux/Slices/userSlice";
import {validateUserForm} from "../Utilities/helperFunctions";
import {useNavigate} from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 15px;
`;
const CreateEditUser = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const {user} = useSelector(userSelector);
  const [localUser, setLocalUser] = useState({firstName: "", lastName: "", email: ""});

  useEffect(() => {
    if (user) {
      setLocalUser({
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
      });
    }
    return () => {
      dispatch(setUser(null));
    };
  }, [user, dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setLocalUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const {firstName, lastName, email} = localUser;
    const [hasError, errors] = validateUserForm(firstName, lastName, email);
    if (hasError) {
      alert(Object.values(errors).filter((value: string) => value.length > 0));
    } else {
      if (user) {
        dispatch(editUser({first_name: firstName, last_name: lastName, email: email}, user.id));
      } else {
        dispatch(createUser({first_name: firstName, last_name: lastName, email: email}));
      }
      navigate("/");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          type="text"
          name="firstName"
          placeholder="First Name"
          value={localUser.firstName ? localUser.firstName : ""}
        />
        <Input
          onChange={handleChange}
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={localUser.lastName ? localUser.lastName : ""}
        />
        <Input
          onChange={handleChange}
          type="text"
          name="email"
          placeholder="email"
          value={localUser.email ? localUser.email : ""}
        />
        <StyledButton type="submit">{user === null ? "ADD NEW USER" : "UPDATE USER"}</StyledButton>
      </Form>
    </Container>
  );
};

export default CreateEditUser;
