import React from 'react';
import Proptypes from 'prop-types';
import Row from '../Row';
import Form from '../Form';
import './styles.css';

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

function Body(props) {
  const { data, onDeleteUser, onHandleSubmit } = props;

  return (
    <div className="body">
      <Form onHandleSubmit={onHandleSubmit} />
      {data.map((user) => (
        <Row
          user={user}
          key={user && user.id}
          onDeleteUser={onDeleteUser}
        />
      ))}
    </div>
  );
}

Body.propTypes = propTypes;

export default Body;
