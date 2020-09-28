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
  error,
});

const propTypes = {
  githubAccounts: PropTypes.arrayOf(PropTypes.object).isRequired,
  githubAccountsLoading: PropTypes.bool.isRequired,
  searchedName: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
};

function App({ githubAccounts, githubAccountsLoading, searchedName, error }) {
  let content;

  if (searchedName && githubAccounts.length > 0)
    content = (
      <>
        <Info>{`Showing users for "${searchedName}"`}</Info>
        {githubAccounts.map((account) => (
          <UserInformation userName={account.login} reposUrl={account.repos_url} key={account.id} />
        ))}
      </>
    );

  if (searchedName && githubAccounts.length === 0)
    content = <InfoBox type="error" message={`Not users available under ${searchedName}`} mTop={18} />;

  if (githubAccountsLoading) content = <Loader />;

  return (
    <Div column itemsCenter margin={10}>
      {error && <InfoBox type="error" message="Something went wrong, try again!" />}

      <h1>
        <Logo>YND</Logo> GitHub repositories explorer
      </h1>

      <AppContainer column itemsCenter justifyCenter width="100%" maxWidth={500}>
        <Form />
        {content}
      </AppContainer>
    </Div>
  );
}

App.propTypes = propTypes;

export default connect(mapStateToProps)(App);

const AppContainer = styled(Div)`
  font-size: 16px;
  word-break: break-word;
`;

const Logo = styled.span`
  color: #32d2d1;
  font-weight: bold;
`;

const Info = styled.p`
  color: #747474;
  margin: 18px 0;
  align-self: flex-start;
`;
