import React from 'react';

import Spinner from 'react-bootstrap/Spinner';


const Loading = () => {
    return (
        <div id="loadingContainer">
            <Spinner animation="border" role="status" variant="light">
                <span className="sr-only">Loading...</span>
            </Spinner>
            <h2 id="loadingText" className="whiteText">Loading...</h2>
        </div>
    );
};

export default Loading;
