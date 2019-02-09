import React from 'react';

const button = props => (
    <div className={props.className}>
        <button type={props.type} onClick={props.onClick} disabled={props.disabled}>{props.title}</button>
    </div>
);

export default button;