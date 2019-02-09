import React from 'react';

const input = props => (
    <div className={props.className}>
        <input type={props.type} id={props.id} onChange={props.onChange}></input>
    </div>
);

export default input;