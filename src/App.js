import React from 'react';
import { connect } from "react-redux";
import './App.css';

import Form from "./components/Form";
import UserInformation from "./components/UserInformation";
import UserTile from "./components/UserTile";

const mapStateToProps = ({ githubAccounts }) => ({ githubAccounts });

function App({ githubAccounts }) {
  return (
    <div className="App">
      <header className="App-header">
        <Form />

        {
          githubAccounts.length > 0 && githubAccounts.map(account => (
            <UserInformation userName={account.login} key={account.id}>
              <UserTile title="lalalal" description="blab;ab;ab" stars={34} />
              <UserTile title="lalalal" description="blab;ab;ab" stars={34} />
            </UserInformation>
          ))
        }
      </header>
    </div>
  );
}

export default connect(mapStateToProps)(App);
