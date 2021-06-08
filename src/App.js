import React, { useState, useEffect } from 'react';

import Table from 'react-bootstrap/Table';

import albumService from './services/albums';

import formatting from './utils/formatting';

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

    const renderAlbumTable = () => {

        const formatAlbumData = (albumItem, keyName) => {
            const albumVal = albumItem[keyName];

            if (albumVal != null) {
                switch (keyName) {
                case 'genres':
                    return albumVal.join(', ');
                case 'last_listened':
                    return formatting.formatDateObject(new Date(albumVal), true);
                case 'release_date':
                    return formatting.formatDateObject(new Date(albumVal));
                default:
                    return albumVal;
                }
            } else {
                return '--';
            }
        };

        albumData.sort((item1, item2) => {
            //if last_listened value is nullish, make infinitely small
            //this causes the entry to be sorted to the end of the array/listed at the end of the table
            const item1Time = item1['last_listened'] ?? -Infinity;
            const item2Time = item2['last_listened'] ?? -Infinity;

            return item1Time <= item2Time; //sorting by last_listened (descending)
        });

        return (
            <div id="albumTable">
                <Table striped bordered hover variant="dark">
                    <TableHeader headings={TABLE_HEADINGS} />
                    <TableBody tableData={albumData} keyNames={KEY_NAMES} formatData={formatAlbumData} />
                </Table>
            </div>
        );
    };

    return (
        <div id="root">
            <div>
                <h1 id="titleText" className="whiteText">NeuroFlow: User Albums Table</h1>
            </div>
            {albumData == null
                ? <Loading />
                : renderAlbumTable()
            }
        </div>
    );
}

export default App;
