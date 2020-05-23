import React from 'react';
import Proptypes from 'prop-types';
import './styles.css';

const propTypes = {
  user: Proptypes.shape({
    name: Proptypes.string,
    age: Proptypes.number,
    id: Proptypes.number,
  }),
  onDeleteUser: Proptypes.func.isRequired,
};

const defaultProps = {
  user: { name: '', age: '', id: 'default' },
};

function Row(props) {
  const { user, onDeleteUser } = props;

  return (
    <div className="row">
      <div>{user && user.name}</div>
      <div>{user && user.age}</div>
      <button
        type="button"
        onClick={() => onDeleteUser(user)}
      >
        remove
      </button>
    </div>
  );
}

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
