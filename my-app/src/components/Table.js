import React from 'react';
import './Table.css';

const Header = () => (
    <div className='header'>
        <div>Names</div>
        <div>Age</div>
    </div>
)

const Body = () => (
    <div className='body'>
        <Row/>
        <Row/>
        <Row/>
    </div>
)

const Row = () => (
    <div className='row'>
        <div>Josiane</div>
        <div>24</div>
    </div>
)


function Table(props) {
    return (
        <div className='table'>
            <Header />
            <Body />
        </div>
    );
}

export default Table;