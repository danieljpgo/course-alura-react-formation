import React, { useEffect, useState, memo } from 'react';
import Body from './Body';
import Api from '../../services/api';
import './styles.css';

const usersDefault = [];
const endpoint = 'employees';

const Header = () => (
  <div className="header">
    <div>Names</div>
    <div>Age</div>
    <div>Actions</div>
  </div>
);

const MemoHeader = memo(Header);

function Table() {
  const [users, setUsers] = useState(usersDefault);

  useEffect(() => {
    Api.get(endpoint)
      .then((employees) => {
        const dataParse = employees && employees.data.map((employee) => ({
          name: employee.employee_name,
          age: Number(employee.employee_age),
          id: Number(employee.id),
        }));

        setUsers(dataParse);
      });
  }, []);

  function onDeleteUser(deleteUser) {
    setUsers(users.filter((user) => user.id !== deleteUser.id));
    // Dummy rest api example dont's work with delete
    Api.delete('delete', deleteUser.id);
  }

  function onHandleSubmit(user) {
    setUsers([...users, {
      ...user,
      id: (users.length > 0 && users[users.length - 1].id) + 1,
    }]);

    // Dummy rest api example dont's work with create
    Api.post('create', JSON.stringify({
      employee_name: user.name,
      employee_age: user.age,
    }));
  }

  return (
    <div className="table">
      <MemoHeader />
      <Body
        data={users}
        onDeleteUser={onDeleteUser}
        onHandleSubmit={onHandleSubmit}
      />
    </div>
  );
}

export default Table;
