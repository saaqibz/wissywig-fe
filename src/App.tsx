import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Builder from './builder/Builder';

function App(): JSX.Element {
  return (
    <div className="App">
      <Builder />
    </div>
  );
}

export default App;
