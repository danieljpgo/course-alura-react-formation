import React, { useEffect, useState, memo } from 'react';
import Proptypes from 'prop-types';
import Body from './Body';
import './styles.css';

const Header = () => (
  <div className="header">
    <div>Names</div>
    <div>Age</div>
    <div>Actions</div>
  </div>
);

const MemoHeader = memo(Header);

const propTypes = {
  data: Proptypes.arrayOf(
    Proptypes.shape({
      name: Proptypes.string,
      age: Proptypes.number,
      id: Proptypes.number,
    }),
  ).isRequired,
};

const userDataDefault = [];

function Table(props) {
  const { data } = props;

  const [userData, setUserData] = useState(userDataDefault);

  useEffect(() => {
    setUserData(data);
  }, [data]);

  function onDeleteUser(deleteUser) {
    setUserData(userData.filter((user) => user.id !== deleteUser.id));
  }

  function onHandleSubmit(user) {
    setUserData([...userData, {
      ...user,
      id: (userData.length > 0 && userData[userData.length - 1].id) + 1,
    }]);
  }

  return (
    <div className="table">
      <MemoHeader />
      <Body
        data={userData}
        onDeleteUser={onDeleteUser}
        onHandleSubmit={onHandleSubmit}
      />
    </div>
  );
}

Table.propTypes = propTypes;

export default Table;
