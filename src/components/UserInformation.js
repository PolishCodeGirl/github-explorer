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
        <Arrow isRotated={isOpen} />
      </Div>
      {children && <HeightTransition isActive={isOpen}>{children}</HeightTransition>}
    </Div>
  );
};

UserInformation.propTypes = propTypes;
UserInformation.defaultProps = defaultProps;

export default UserInformation;

const Arrow = styled.span`
  flex: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  position: relative;
  pointer-events: none;

  &::before,
  &::after {
    content: '';
    display: block;
    width: 12px;
    height: 2px;
    position: absolute;
    top: 12px;
    background: black;
    border-radius: 2px;
  }

  &::before {
    right: 8px;
    transform: rotate(45deg);
  }
  &::after {
    left: 12px;
    transform: rotate(-45deg);
  }

  transform: ${({ isRotated }) => (isRotated ? 'rotate(180deg)' : 'none')};
  transition: transform 400ms;
`;
