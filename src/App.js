import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Div from 'styled-kit/Div';

import Form from './components/Form';
import UserInformation from './components/UserInformation';
import UserTile from './components/UserTile';
import InfoBox from './components/InfoBox';
import Loader from './components/Loader';
 
const mapStateToProps = ({ githubAccounts, userRepos, userReposLoading }) => ({ githubAccounts, userRepos, userReposLoading });

const propTypes = {
  githubAccounts: PropTypes.arrayOf(PropTypes.object),
  userRepos: PropTypes.objectOf(PropTypes.array),
  userReposLoading: PropTypes.bool
}

function App({ githubAccounts, userRepos, userReposLoading }) {
  return (
    <Div justifyCenter width='100%'>
      <Div column itemsCenter justifyCenter width='100%' maxWidth={500}>
        <Form />

        {
          githubAccounts.length > 0 && githubAccounts.map(account => (
            <UserInformation userName={account.login} reposUrl={account.repos_url} key={account.id}>
              {
                userReposLoading ? <Loader /> :
                  userRepos[account.login]?.length === 0 ? <InfoBox message={`${account.login} doesn't have any repozitories`} /> : userRepos[account.login]?.map(repo => (
                    <UserTile title={repo.name} description={repo.description} stars={repo.stargazers_count} key={repo.id} />
                  ))
              }
            </UserInformation>
          ))
        }
      </Div>
    </Div>
  );
}

App.propTypes = propTypes;

export default connect(mapStateToProps)(App);
