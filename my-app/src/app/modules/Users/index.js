import React from 'react';
import Display from './Display/Display';

function User() {
  return (
    <div>
      {/* @TODO Criar um component para agrupar o conteudo + titulo */}
      <div>
        <div>
          Formulario
        </div>
        Form
      </div>
      <div>
        <div>
          Usuarios
        </div>
        <Display />
      </div>
    </div>
  );
}

export default User;
