import React from 'react';
import { connect } from "react-redux";
import Div from "styled-kit/Div";

import Form from "./components/Form";
import UserInformation from "./components/UserInformation";
import UserTile from "./components/UserTile";
import InfoBox from "./components/InfoBox";
import Loader from "./components/Loader";

const mapStateToProps = ({ githubAccounts, userRepos, userRepoLoading }) => ({ githubAccounts, userRepos, userRepoLoading });

function App({ githubAccounts, userRepos, userRepoLoading }) {
  return (
    <Div justifyCenter width='100%'>
      <Div column itemsCenter justifyCenter width='100%' maxWidth={500}>
        <Form />

        {
          githubAccounts.length > 0 && githubAccounts.map(account => (
            <UserInformation userName={account.login} reposUrl={account.repos_url} key={account.id}>
              {
                userRepoLoading ? <Loader /> :
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

export default connect(mapStateToProps)(App);
