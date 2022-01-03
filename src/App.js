import React from 'react';
import './App.css';
import Table from './components/Table';
import Input from './components/Input';
import ProviderGlobal from './contexts/ProviderGlobal';
import InputNumber from './components/InputNumber';

function App() {
  return (
    <ProviderGlobal>
      <Input />
      <InputNumber />
      <Table />
    </ProviderGlobal>
  );
}

export default App;
