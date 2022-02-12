import React, {useState} from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SearchInput = styled(Input)`
  margin-top: 0;
  height: 2rem;
`;
const SearchButton = styled(Button)`
  margin-left: 10px;
`;

const SearchUsers = ({
  setSearchTerm,
}: {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [term, setTerm] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSearchTerm(term);
  };
  return (
    <Container>
      <SearchInput onChange={handleChange} />
      <SearchButton onClick={handleClick}>SEARCH</SearchButton>
    </Container>
  );
};

export default SearchUsers;
