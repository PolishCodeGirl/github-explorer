import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Div from "styled-kit/Div";

const Form = () => {
  const [userNameValue, setUserNameValue] = useState("");

  const handleOnChange = (event) => {
    setUserNameValue(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/search/users?q=${userNameValue}`)
      .then((response) => {
        console.log("response", response.data);
      })
      .catch((error) => {
        console.log("something went wrong", error);
      });
  };

  return (
    <form>
      <Div mTop={32}>
        <Input
          type="text"
          value={userNameValue}
          placeholder="Enter username"
          required
          onChange={handleOnChange}
        />
      </Div>
      <Div mTop={32}>
        <Button type="submit" onClick={handleSearch}>
          Search
        </Button>
      </Div>
    </form>
  );
};

export default Form;

const Input = styled.input`
  padding: 5px;
`;

const Button = styled.button`
  width: 100%;
  background-color: lightblue;
  border: 1px solid lightblue;
  color: white;
  padding: 5px;
`;
