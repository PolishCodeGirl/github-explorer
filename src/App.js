import React from 'react';
import { connect } from "react-redux";
import Div from "styled-kit/Div";

import Form from "./components/Form";
import UserInformation from "./components/UserInformation";
import UserTile from "./components/UserTile";
import InfoBox from "./components/InfoBox";

const mapStateToProps = ({ githubAccounts, userRepos }) => ({ githubAccounts, userRepos });

function App({ githubAccounts, userRepos }) {
  return (
    <Div justifyCenter width='100%'>
      <Div column itemsCenter justifyCenter width='100%' maxWidth={500}>
        <Form />

        {
          githubAccounts.length > 0 && githubAccounts.map(account => (
            <UserInformation userName={account.login} reposUrl={account.repos_url} key={account.id}>
              {
                userRepos[account.login] && userRepos[account.login].map(repo => (
                  <UserTile title={repo.name} description={repo.description} stars={repo.stargazers_count} key={repo.id} />
                ))
              }
            </UserInformation>
          ))
        }

        <InfoBox message="Ala ma kota" />
      </Div>
    </Div>
  );
}

export default connect(mapStateToProps)(App);
