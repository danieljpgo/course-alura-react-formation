import React, { useState } from 'react';
import './TableForm.css';

const INITIAL_STATE = {
  name: '',
  age: '',
  id: null,
};

function TableForm(props) {
  const [form, setForm] = useState(INITIAL_STATE);
  const { name, age } = form;

  function onChangeInput(events) {
    const { name, value } = events.target;
    setForm({ ...form, [name]: value });
  }

  function onHandleSubmit() {
    props.onHandleSubmit(form);
    setForm(INITIAL_STATE);
  }

  return (
    <form onSubmit={onHandleSubmit}>
      <div>
        <input
          id='name'
          type='text'
          name='name'
          value={name}
          onChange={onChangeInput}
        />
      </div>
      <div>
        <input
          id='age'
          type='text'
          name='age'
          value={age}
          onChange={onChangeInput}
        />
      </div>
      <div>
        <button type='button' onClick={onHandleSubmit}>
          add
        </button>
      </div>
    </form>
  );
}

export default TableForm;
