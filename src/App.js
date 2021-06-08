import React, { useState, useEffect } from 'react';

import Table from 'react-bootstrap/Table';

import albumService from './services/albums';

import Loading from './components/Loading';
import TableHeader from './components/TableHeader';
import TableBody from './components/TableBody';

import './App.css';

const TABLE_HEADINGS = ['Band', 'Album', 'Genres', 'Date Released', 'Last Played'];
const KEY_NAMES = ['band_name', 'album_title', 'genres', 'release_date', 'last_listened'];


function App() {
    const [albumData, setAlbumData] = useState(null);

    useEffect(() => {
        albumService.getAlbums()
            .then(albums => setAlbumData(albums));
    }, []);

    return (
        <div className="App">
            {albumData == null
                ? <Loading />
                : (
                    <Table striped bordered hover variant="dark">
                        <TableHeader headings={TABLE_HEADINGS} />
                        <TableBody tableData={albumData} keyNames={KEY_NAMES} />
                    </Table>
                )}
        </div>
    );
}

export default App;
