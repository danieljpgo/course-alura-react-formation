import React from 'react';
import Proptypes from 'prop-types';
import Body from './body';
import './styles.css';

const Header = () => (
  <div className="header">
    <div>Names</div>
    <div>Age</div>
    <div>Actions</div>
  </div>
);

const propTypes = {
  data: Proptypes.arrayOf(
    Proptypes.shape({
      name: Proptypes.string,
      age: Proptypes.number,
      id: Proptypes.number,
    }),
  ).isRequired,
  onHandleSubmit: Proptypes.func.isRequired,
  onDeleteUser: Proptypes.func.isRequired,
};

function Table(props) {
  const { data, onDeleteUser, onHandleSubmit } = props;

  return (
    <div className="table">
      <Header />
      <Body
        data={data}
        onDeleteUser={onDeleteUser}
        onHandleSubmit={onHandleSubmit}
      />
    </div>
  );
}

Table.propTypes = propTypes;

export default Table;
