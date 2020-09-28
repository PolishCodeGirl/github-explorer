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
import Arrow from './Arrow';

const mapStateToProps = ({ userRepos, userReposLoading, nameOfUserWithReposLoading }) => ({
  userRepos,
  userReposLoading,
  nameOfUserWithReposLoading,
});

const propTypes = {
  userName: PropTypes.string.isRequired,
  reposUrl: PropTypes.string.isRequired,
  userRepos: PropTypes.objectOf(PropTypes.array).isRequired,
  userReposLoading: PropTypes.bool.isRequired,
  nameOfUserWithReposLoading: PropTypes.string.isRequired,
};

const UserInformation = ({ userName, reposUrl, userRepos, userReposLoading, nameOfUserWithReposLoading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [reposConter, setReposCounter] = useState(5);

  const userReposAmount = userRepos[userName]?.length;

  const handleClick = () => {
    setIsOpen((state) => !state);

    if (getState().userRepos[userName]) return;

    // Make sure that we cannot send another request when one is already pending
    !userReposLoading && dispatch(getUserRepos(userName, reposUrl));
  };

  const handleShowMore = () => {
    if (reposConter <= userReposAmount) {
      setReposCounter(reposConter + 5);
    }
  };

  let content;
  if (userReposAmount > 0)
    content = (
      <>
        {userRepos[userName]?.slice(0, reposConter).map((repo) => (
          <UserTile
            title={repo.name}
            description={repo.description}
            stars={repo.stargazers_count}
            key={repo.id}
            repoUrl={repo.html_url}
          />
        ))}
        <ShowMore onClick={handleShowMore} disabled={Boolean(reposConter >= userReposAmount)}>
          Show more
        </ShowMore>
      </>
    );

  if (userReposAmount === 0) content = <InfoBox type="info" message={`${userName} doesn't have any repositories`} />;

  if (nameOfUserWithReposLoading === userName) content = <Loader />;

  return (
    <Div column mBottom={10} width="100%">
      <Div padding={5} justifyBetween onClick={handleClick} background="#f2f2f2">
        <p>{userName}</p>
        <Arrow isRotated={isOpen} />
      </Div>

      {isOpen && <Div column>{content}</Div>}
    </Div>
  );
};

UserInformation.propTypes = propTypes;

export default connect(mapStateToProps)(UserInformation);

const ShowMore = styled.span`
  font-size: 14px;
  margin-top: 10px;
  color: ${({ disabled }) => (disabled ? '#747474' : '#009de0')};
  text-align: center;
`;
