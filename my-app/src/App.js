import React from 'react';
import './App.css';
import Table from './components/table/Table'
import mock from './utils/tableMock.json'

function App() {

  const tableData = mock;

  return (
    <div className="container">
      <Table data={tableData} />
    </div>
  );
}

export default App;
