import React, { useState, useEffect } from 'react';

import albumService from './services/albums';

import './App.css';

function App() {
    const [albumData, setAlbumData] = useState(null);

    useEffect(() => {
        albumService.getAll()
            .then(data => setAlbumData(data));
    }, []);

    return (
        <div className="App">
            <p>{albumData != null ? 'albums loaded!' : 'loading...'}</p>
        </div>
    );
}

export default App;
