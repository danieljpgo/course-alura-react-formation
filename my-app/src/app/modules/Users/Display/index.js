import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from './styles';
import { item, container } from './animations';
import Api from '../../../common/services/api';
import Row from './Row';

const usersDefault = [];
const endpoint = 'users';

function Display() {
  const [users, setUsers] = useState(usersDefault);

  useEffect(() => {
    Api.get(endpoint)
      .then((data) => setUsers(data));
  }, []);

  function onDeleteUser(deleteUser) {
    setUsers(users.filter((user) => user.id !== deleteUser.id));
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
