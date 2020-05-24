import React from 'react';
import Table from './table';
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
