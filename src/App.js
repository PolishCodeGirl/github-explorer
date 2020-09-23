import React from 'react';
import './App.css';

import Form from "./components/Form";
import UserInformation from "./components/UserInformation";
import UserTile from "./components/UserTile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form />

        <UserInformation userName="PolishCodeGirls">
          <UserTile title="lalalal" description="blab;ab;ab" stars={34} />
          <UserTile title="lalalal" description="blab;ab;ab" stars={34} />
        </UserInformation>

        <UserInformation userName="Coderka">
          <UserTile title="lalalal" description="blab;ab;ab" stars={34} />
          <UserTile title="lalalal" description="blab;ab;ab" stars={34} />
        </UserInformation>
      </header>
    </div>
  );
}

export default App;
