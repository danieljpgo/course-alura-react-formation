import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Api from '../../../common/services/api';
import Row from './Row';
import { Container } from './styles';
import { item, container } from './animation';


const usersDefault = [];
const endpoint = 'employees';

function Display() {
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

  return (
    users === usersDefault
      ? <div> Loading </div>
      : (
        <Container>
          <motion.div
            className="display"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {users.map((user) => (
              <motion.div
                key={user && user.id}
                variants={item}
              >
                <Row
                  user={user}
                  key={user && user.id}
                  onDeleteUser={onDeleteUser}
                />
              </motion.div>
            ))}
          </motion.div>
        </Container>

      )
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
