import React from 'react';

const header = props => (
    <div className="infoBlock-header">
        <div className="infoBlock-header--text" >
            <h1>{props.text}</h1>
        </div>
    </div>
);

export default header;