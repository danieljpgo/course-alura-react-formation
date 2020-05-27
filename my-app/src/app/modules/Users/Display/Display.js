import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Api from '../../../common/services/api';
import Row from './Row/Row';


const useStyles = makeStyles(() => ({
  container: {
    display: 'grid',
    width: '80vw',
    maxWidth: '500px',
  },
}));

const usersDefault = [];
const endpoint = 'employees';

function Display() {
  const [users, setUsers] = useState(usersDefault);
  const classes = useStyles();

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

  return (
    <div className={classes.container}>
      {
        users === usersDefault
          ? <div> Loading </div>
          : users.map((user) => (
            <Row
              user={user}
              key={user && user.id}
              onDeleteUser={onDeleteUser}
            />
          ))
      }
    </div>
  );
}

export default Display;


// function onHandleSubmit(user) {
//   setUsers([...users, {
//     ...user,
//     id: (users.length > 0 && users[users.length - 1].id) + 1,
//   }]);

//   // Dummy rest api example dont's work with create
//   Api.post('create', JSON.stringify({
//     employee_name: user.name,
//     employee_age: user.age,
//   }));
// }
