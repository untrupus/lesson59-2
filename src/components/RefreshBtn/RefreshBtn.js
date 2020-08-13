import React from 'react';
import './RefreshBtn.css';

const RefreshBtn = React.memo((props) => {
        return (
            <>
                <button type="button" onClick={props.click}>Refresh</button>
            </>
        );
    }
);


export default RefreshBtn;