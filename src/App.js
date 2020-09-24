import React from 'react';
import { connect } from "react-redux";
import './App.css';

import Form from "./components/Form";
import UserInformation from "./components/UserInformation";
import UserTile from "./components/UserTile";

const mapStateToProps = ({ githubAccounts, userRepos }) => ({ githubAccounts, userRepos });

function App({ githubAccounts, userRepos }) {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default connect(mapStateToProps)(App);
