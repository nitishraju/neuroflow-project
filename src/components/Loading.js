import React from 'react';

import Spinner from 'react-bootstrap/Spinner';


const Loading = () => {
    return (
        <div>
            <Spinner animation="border" role="status" variant="light">
                <span className="sr-only">Loading...</span>
            </Spinner>
            <h2>Loading...</h2>
        </div>
    );
};

export default Loading;
