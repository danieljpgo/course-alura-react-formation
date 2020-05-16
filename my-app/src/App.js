import React, { useState } from 'react';
import './App.css';
import Table from './components/table/Table';
import mock from './utils/tableMock.json';

const DATA_DEFAULT = mock;

function App() {
  const [data, setData] = useState(DATA_DEFAULT);

  function onDeleteUser(id) {
    setData(data.filter((user) => user.id !== id));
  }

  function onHandleSubmit(user) {
    setData([...data, { ...user, id: data[data.length - 1].id + 1 }]);
  }

  return (
    <div className='container'>
      <Table
        data={data}
        onDeleteUser={({ id }) => onDeleteUser(id)}
        onHandleSubmit={(user) => onHandleSubmit(user)}
      />
    </div>
  );
}

export default App;
