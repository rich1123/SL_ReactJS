import React from 'react';
import ReactDOM from 'react-dom';
// import style './style.css';

function Item(props) {
    return <div className="item">
    <b>Name:</b>{props.name} <br/>
    <b>Price:</b> ${props.price}
    </div>
}

function App() {
    return <div>
    <Item name="Cheese" price="4.99" />
    <Item name="Bread" price="1.5" />
    <Item name="Ice Cream" price="24" />
    </div>;
}

const el = <App />