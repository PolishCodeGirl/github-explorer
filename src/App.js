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

const mapStateToProps = ({ githubAccounts, userRepos, userReposLoading, githubAccountsLoading }) => ({ githubAccounts, userRepos, userReposLoading, githubAccountsLoading });

const propTypes = {
  githubAccounts: PropTypes.arrayOf(PropTypes.object),
  userRepos: PropTypes.objectOf(PropTypes.array),
  userReposLoading: PropTypes.bool,
  githubAccountsLoading: PropTypes.bool
}

function App({ githubAccounts, userRepos, userReposLoading, githubAccountsLoading }) {
  return (
    <Div justifyCenter width='100%'>
      <AppContainer column itemsCenter justifyCenter width='100%' maxWidth={500}>
        <Form />

        {
          githubAccountsLoading ? <Loader /> :
            githubAccounts === null ? null :
              githubAccounts?.length === 0 ? <InfoBox message="Not users available under this name" /> : githubAccounts?.map(account => (
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
      </AppContainer>
    </Div>
  );
}

App.propTypes = propTypes;

export default connect(mapStateToProps)(App);

const AppContainer = styled(Div)`
  font-size: 16px;
  margin: 10px;
`;
