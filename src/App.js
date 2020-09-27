import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Div from 'styled-kit/Div';

import Form from './components/Form';
import UserInformation from './components/UserInformation';
import InfoBox from './components/InfoBox';
import Loader from './components/Loader';

const mapStateToProps = ({ githubAccounts, githubAccountsLoading, error }) => ({ 
  githubAccounts,
  githubAccountsLoading,
  error
});

const propTypes = {
  githubAccounts: PropTypes.arrayOf(PropTypes.object).isRequired, // Fix this prop type
  githubAccountsLoading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired
}

function App({ githubAccounts, githubAccountsLoading, error }) {
  return (
    <Div column itemsCenter width='100%'>
      {error && <InfoBox type="error" message='Something went wrong, try again!' />}
      
      <H1>
        <span>YND</span> Github repositories explorer
      </H1>
      
      <AppContainer column itemsCenter justifyCenter width='100%' maxWidth={500}>
        <Form />

        {
          githubAccountsLoading ? <Loader /> :
            githubAccounts === null ? null :
              githubAccounts?.length === 0 ? <InfoBox type="info" message="Not users available under this name" /> : githubAccounts?.map(account => (
                <UserInformation userName={account.login} reposUrl={account.repos_url} key={account.id} />
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

const H1 = styled.h1`
  span {
    color: #32d2d1;
    font-weight: bold;
  }
`;
