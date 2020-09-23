import React from 'react';
import './App.css';

import Form from "./components/Form";
import UserTile from "./components/UserTile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form />
        <UserTile title="lalalal" description="blab;ab;ab" stars={34} />
        <UserTile title="lalalal" description="blab;ab;ab" stars={24} />
      </header>
    </div>
  );
}

export default App;
