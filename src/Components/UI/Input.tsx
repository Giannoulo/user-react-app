import styled from "styled-components";

const Input = styled.input`
  border-radius: 12px;
  font-size: 1rem;
  height: 3rem;
  padding: 5px 40px;
  background-color: #fff;
  color: inherit;
  margin-top: 20px;
  width: 100%;
  border: 2px solid rgb(116, 116, 116);
  &::placeholder {
    font-size: 0.8rem;
    color: rgb(150, 150, 150);
  }
`;

export default Input;
