import React, { useState } from 'react';
import Table from './table';
import mock from '../../../utils/tableMock.json';

const DATA_DEFAULT = mock;

function App() {
  const [data, setData] = useState(DATA_DEFAULT);

  console.log('ai papai, render');

  function onDeleteUser(id) {
    setData(data.filter((user) => user.id !== id));
  }

  function onHandleSubmit(user) {
    setData([...data, { ...user, id: data[data.length - 1].id + 1 }]);
  }

  return (
    <Table
      data={data}
      onDeleteUser={({ id }) => onDeleteUser(id)}
      onHandleSubmit={(user) => onHandleSubmit(user)}
    />
  );
}

export default App;
