import React from 'react';
import './App.css';
import Table from './components/Table';
import Input from './components/Input';
import ProviderGlobal from './contexts/ProviderGlobal';

function App() {
  return (
    <ProviderGlobal>
      <Input />
      <Table />
    </ProviderGlobal>
  );
}

export default App;
