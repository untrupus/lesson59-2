import React from 'react';

const RefreshBtn = props => {
    return (
        <>
            <button type="button" onClick={props.click}>Refresh</button>
        </>
    );
};

export default RefreshBtn;