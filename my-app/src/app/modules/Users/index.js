import React from 'react';
import Display from './Display';
import Presentation from '../../common/components/Presentation';


const title = 'Users';

function User() {
  return (
    <div>
      <Presentation title={title} box={false}>
        <Display />
      </Presentation>
    </div>
  );
}

export default User;
