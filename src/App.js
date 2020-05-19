import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-default text-content">
      <header className="text-center">
        <img src={logo} className="inline-block w-64 animation-spin animation-5s animation-linear animation-infinite m-6" alt="logo" />
        <p className="text-2xl">
          Edit <code className="font-mono text-3xl">src/App.js</code> and save to reload.
        </p>
        <a className="text-primary text-2xl underline" href="https://reactjs.org">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
