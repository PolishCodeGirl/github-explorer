import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Div from 'styled-kit/Div';

import Form from './components/Form';
import UserInformation from './components/UserInformation';
import UserTile from './components/UserTile';
import InfoBox from './components/InfoBox';
import Loader from './components/Loader';

const mapStateToProps = ({ githubAccounts, userRepos, userReposLoading, githubAccountsLoading, error }) => ({ 
  githubAccounts,
  userRepos,
  userReposLoading,
  githubAccountsLoading,
  error
});

const propTypes = {
  githubAccounts: PropTypes.arrayOf(PropTypes.object).isRequired, // Fix this prop type
  userRepos: PropTypes.objectOf(PropTypes.array).isRequired,
  userReposLoading: PropTypes.bool.isRequired,
  githubAccountsLoading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired
}

function App({ githubAccounts, userRepos, userReposLoading, githubAccountsLoading, error }) {
  return (
    <Div column itemsCenter width='100%'>
      {error && <InfoBox type="error" message='Something went wrong, try again!' />}
      
      <h1>
        <span style={{ color: '#32d2d1', fontWeight: 'bold' }}>YND</span> Github repositories explorer
      </h1>
      <AppContainer column itemsCenter justifyCenter width='100%' maxWidth={500}>
        <Form />

        {
          githubAccountsLoading ? <Loader /> :
            githubAccounts === null ? null :
              githubAccounts?.length === 0 ? <InfoBox type="info" message="Not users available under this name" /> : githubAccounts?.map(account => (
                <UserInformation userName={account.login} reposUrl={account.repos_url} key={account.id}>
                  {
                    userReposLoading ? <Loader /> :
                      userRepos[account.login]?.length === 0 ? <InfoBox type="info" message={`${account.login} doesn't have any repositories`} /> : userRepos[account.login]?.map(repo => (
                        <UserTile title={repo.name} description={repo.description} stars={repo.stargazers_count} key={repo.id} repoUrl={repo.html_url} />
                      ))
                  }
                </UserInformation>
              ))
        }
      </AppContainer>
    </Div>
  );
}

App.propTypes = propTypes;

export default connect(mapStateToProps)(App);

const AppContainer = styled(Div)`
  font-size: 16px;
  margin: 10px;
  word-break: break-word;
`;
