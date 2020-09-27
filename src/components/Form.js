import React, { useState } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from "styled-components";

import Div from "styled-kit/Div";

import { dispatch } from '../store';
import { getGithubUsers, clearUsersRepos } from '../reducers/githubUsers';

const mapStateToProps = ({ searchedName }) => ({ searchedName });

const propTypes = {
  searchedName: PropTypes.string.isRequired
}

const Form = ({ searchedName }) => {
  const [userNameValue, setUserNameValue] = useState('');

  const handleOnChange = (event) => {
    setUserNameValue(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (searchedName !== userNameValue) {
      dispatch(getGithubUsers(userNameValue.replace(/\s/g, '')));
      dispatch(clearUsersRepos());
    }
  };

  return (
    <FormWrapper onSubmit={handleSearch}>
      <Div>
        <Input
          type="text"
          value={userNameValue}
          placeholder="Enter username"
          required
          onChange={handleOnChange}
        />
      </Div>
      
      <Div mTop={24}>
        <Button type="submit">
          Search
        </Button>
      </Div>
    </FormWrapper>
  );
};

Form.propTypes = propTypes;

export default connect(mapStateToProps)(Form);

const FormWrapper = styled.form`
  width: 100%;
  `

const Input = styled.input`
  width: 100%;
  padding: 10px;
  outline: none;
  background-color: #f2f2f2;
  border: 2px solid #e0e0e0;
  `;

const Button = styled.button`
  width: 100%;
  font-size: 16px;
  background-color: #009de0;
  border: 1px solid #009de0;
  color: white;
  padding: 10px;
  outline: none;
`;
