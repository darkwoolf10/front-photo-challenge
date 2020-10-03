import React from 'react';
import './App.scss';
import Header from './components/common/Header';
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <body>
        <Home />
      </body>
    </div>
  );
}

export default App;
