import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Div from 'styled-kit/Div';
import HeightTransition from 'styled-kit/HeightTransition';

import { dispatch, getState } from '../store';
import { getUserRepos } from '../reducers/githubUsers';

const propTypes = {
  userName: PropTypes.string.isRequired,
  reposUrl: PropTypes.string.isRequired,
  children: PropTypes.node
};

const defaultProps = {
  children: null
}

const UserInformation = ({ userName, reposUrl, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((state) => !state);

    if (getState().userRepos[userName]) return;

    dispatch(getUserRepos(userName, reposUrl));
  };

  return (
    <Div column mTop={10} width='100%'>
      <Div padding={5} justifyBetween onClick={handleClick} style={{ backgroundColor: 'lightgray'}}>
        <p>{userName}</p>
        <Arrow isRotated={isOpen}>▼</Arrow>
      </Div>
      {children && <HeightTransition isActive={isOpen}>{children}</HeightTransition>}
    </Div>
  );
};

UserInformation.propTypes = propTypes;
UserInformation.defaultProps = defaultProps;

export default UserInformation;

const Arrow = styled.p`
  font-size: 18px;
  font-weight: bold;

  transform: ${({ isRotated }) => (isRotated ? 'rotate(180deg)' : 'none')};
  transition: transform 400ms;
`;
