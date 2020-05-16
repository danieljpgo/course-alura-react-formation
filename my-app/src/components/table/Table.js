import React from 'react';
import FormTable from './form/TableForm';
import './Table.css';

const Header = () => (
  <div className='header'>
    <div>Names</div>
    <div>Age</div>
    <div>Actions</div>
  </div>
);

const Body = ({ data, onDeleteUser, onHandleSubmit }) => (
  <div className='body'>
    <FormTable onHandleSubmit={onHandleSubmit} />

    {data.map((user, index) => (
      <Row user={user} onDeleteUser={onDeleteUser} key={index} />
    ))}
  </div>
);

const Row = ({ user, onDeleteUser }) => (
  <div className='row'>
    <div>{user.name}</div>
    <div>{user.age}</div>
    <button onClick={() => onDeleteUser(user)}>remove</button>
  </div>
);

function Table(props) {
  const { data, onDeleteUser, onHandleSubmit } = props;

  return (
    <div className='table'>
      <Header />
      <Body
        data={data}
        onDeleteUser={onDeleteUser}
        onHandleSubmit={onHandleSubmit}
      />
    </div>
  );
}

export default Table;
