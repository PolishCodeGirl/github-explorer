import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Div from "styled-kit/Div";

import { getGithubUsers } from '../reducers/githubUsers';

const mapStateToProps = state => {
  console.log(state.githubAccounts);
  return { githubAccounts: state.githubAccounts };
}

const Form = props => {
  const [userNameValue, setUserNameValue] = useState("");

  const handleOnChange = (event) => {
    setUserNameValue(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    props.dispatch(getGithubUsers(userNameValue));
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

export default connect(mapStateToProps)(Form);

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
