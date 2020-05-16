import React from 'react';
import './Table.css';

const Header = () => (
    <div className='header'>
        <div>Names</div>
        <div>Age</div>
    </div>
)

const Body = ({ data }) => (
    <div className='body'>
        {data.map((user, index) => (
            <Row user={user}
                key={index} />
        ))}
    </div>
)

const Row = ({ user }) => (
    <div className='row'>
        <div>{user.name}</div>
        <div>{user.age}</div>
    </div>
);


function Table(props) {
    const { data } = props;

    return (
        <div className='table'>
            <Header />
            <Body data={data} />
        </div>
    );
}

export default Table;