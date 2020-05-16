import React from 'react';
import './Table.css';

const Header = () => (
    <div className='header'>
        <div>Names</div>
        <div>Age</div>
        <div></div>
    </div>
)

const Body = ({ data, onDeleteUser }) => (
    <div className='body'>
        {data.map((user, index) => (
            <Row
                user={user}
                onDeleteUser={onDeleteUser}
                key={index} />
        ))}
    </div>
)

const Row = ({ user, onDeleteUser }) => (
    <div className='row'>
        <div>{user.name}</div>
        <div>{user.age}</div>
        <button onClick={() => onDeleteUser(user)}>remove</button>
    </div>
);


function Table(props) {
    const { data, onDeleteUser } = props;

    return (
        <div className='table'>
            <Header />
            <Body
                data={data}
                onDeleteUser={onDeleteUser} />
        </div>
    );
}

export default Table;