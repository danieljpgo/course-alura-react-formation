import React, { useState } from 'react';
import Proptypes from 'prop-types';
import './styles.css';

const initState = {
  name: '',
  age: '',
  id: null,
};

const propTypes = {
  onHandleSubmit: Proptypes.func.isRequired,
};

function Form(props) {
  const [form, setForm] = useState(initState);

  // const { name, age } = form; eslint erro no-shadow

  function onChangeInput(events) {
    const { name, value } = events.target;
    setForm({ ...form, [name]: value });
  }

  function onHandleSubmit() {
    props.onHandleSubmit(form);
    setForm(initState);
  }

  return (
    <form onSubmit={onHandleSubmit}>
      <div>
        <input
          id="name"
          type="text"
          name="name"
          value={form.name}
          onChange={onChangeInput}
        />
      </div>
      <div>
        <input
          id="age"
          type="text"
          name="age"
          value={form.age}
          onChange={onChangeInput}
        />
      </div>
      <div>
        <button
          type="button"
          onClick={onHandleSubmit}
        >
          add
        </button>
      </div>
    </form>
  );
}

Form.propTypes = propTypes;

export default Form;
