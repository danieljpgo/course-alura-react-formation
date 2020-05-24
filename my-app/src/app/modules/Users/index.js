import React from 'react';
import Table from './Table';
import dataMock from '../../../utils/tableMock.json';

const data = dataMock;

function User() {
  return (
    <Table
      data={data}
    />
  );
}

export default User;