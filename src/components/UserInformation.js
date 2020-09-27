import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Div from 'styled-kit/Div';

import { dispatch, getState } from '../store';
import { getUserRepos } from '../reducers/githubUsers';

import UserTile from './UserTile';
import Loader from './Loader';
import InfoBox from './InfoBox';

const mapStateToProps = ({ userRepos, userReposLoading, nameOfUserWithReposLoading }) => ({ userRepos, userReposLoading, nameOfUserWithReposLoading });

const propTypes = {
  userName: PropTypes.string.isRequired,
  reposUrl: PropTypes.string.isRequired,
  userRepos: PropTypes.objectOf(PropTypes.array).isRequired,
  userReposLoading: PropTypes.bool.isRequired,
  nameOfUserWithReposLoading: PropTypes.string.isRequired,
};

const UserInformation = ({ userName, reposUrl, userRepos, userReposLoading, nameOfUserWithReposLoading }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((state) => !state);

    if (getState().userRepos[userName]) return;

    !userReposLoading && dispatch(getUserRepos(userName, reposUrl));
  };

  let content;
  if (userRepos[userName]?.length > 0) content = userRepos[userName]?.map(repo => (
    <UserTile title={repo.name} description={repo.description} stars={repo.stargazers_count} key={repo.id} repoUrl={repo.html_url} />
  ))

  if (userRepos[userName]?.length === 0) content = <InfoBox type="info" message={`${userName} doesn't have any repositories`} />;

  if (nameOfUserWithReposLoading === userName) content = <Loader />;

  return (
    <Div column mTop={10} width='100%'>
      <Div padding={5} justifyBetween onClick={handleClick} backgroundColor='#f2f2f2'>
        <p>{userName}</p>
        <Arrow isRotated={isOpen} />
      </Div>

      {isOpen && <Div column>{content}</Div>}
    </Div>
  );
};

UserInformation.propTypes = propTypes;

export default connect(mapStateToProps)(UserInformation);

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
