import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Div from 'styled-kit/Div';

import Form from './components/Form';
import UserInformation from './components/UserInformation';
import InfoBox from './components/InfoBox';
import Loader from './components/Loader';

const mapStateToProps = ({ githubAccounts, githubAccountsLoading, searchedName, error }) => ({ 
  githubAccounts,
  githubAccountsLoading,
  searchedName,
  error
});

const propTypes = {
  githubAccounts: PropTypes.arrayOf(PropTypes.object).isRequired,
  githubAccountsLoading: PropTypes.bool.isRequired,
  searchedName: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired
}

function App({ githubAccounts, githubAccountsLoading, searchedName, error }) {
  return (
    <Div column itemsCenter width='100%'>
      {error && <InfoBox type="error" message='Something went wrong, try again!' />}
      
      <H1>
        <span>YND</span> GitHub repositories explorer
      </H1>

      <AppContainer column itemsCenter justifyCenter width='100%' maxWidth={500}>
        <Form />

        {
          githubAccountsLoading ? <Loader /> :
          searchedName ? githubAccounts?.length === 0 ? <InfoBox type="error" message={`Not users available under ${searchedName}`} /> :
              <>
                <Info>{`Showing users for "${searchedName}"`}</Info> 
                {githubAccounts?.map(account => (
                  <UserInformation userName={account.login} reposUrl={account.repos_url} key={account.id} />
                ))}
              </> : null
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

const H1 = styled.h1`
  span {
    color: #32d2d1;
    font-weight: bold;
  }
`;

const Info = styled.p`
  color: #747474;
  margin: 15px 0;
  align-self: flex-start;
`;
